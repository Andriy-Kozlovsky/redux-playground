import {useDispatch} from "react-redux";

import {cartActions} from "../../store/cart-slice";

const CartItem = ({
  title,
  quantity,
  total,
  price,
  id,
}: {
  title: string;
  quantity: number;
  total: number;
  price: number;
  id: string;
}) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const handleAdd = () => {
    dispatch(cartActions.addItemToCart({id, price, title}));
  };

  return (
    <li className="bg-itemBg p-4">
      <header className="flex justify-between items-baseline">
        <h3 className="text-3xl font-bold">{title}</h3>
        <div className="text-2xl font-bold">
          ${total.toFixed(2)}{" "}
          <span className="text-lg font-normal italic">(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className="flex justify-between align-middle mt-4">
        <div>
          x <span className="font-bold text-2xl">{quantity}</span>
        </div>
        <div className="flex justify-end align-baseline space-x-2">
          <button
            className="px-4 py-1  rounded-md border border-white hover:bg-buttonHoverBg"
            onClick={handleRemove}
          >
            -
          </button>
          <button
            className="px-4 py-1  rounded-md border border-white hover:bg-buttonHoverBg"
            onClick={handleAdd}
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
