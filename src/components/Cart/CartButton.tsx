import {useDispatch, useSelector} from "react-redux";

import {uiActions} from "../../store/ui-slice";

const CartButton = () => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state: any) => state.cart.totalQuantity);

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button
      className="bg-transparent border-cian border-solid border rounded-md text-cian px-6 py-2 hover:bg-productButtonHover hover:text-white"
      onClick={toggleCartHandler}
    >
      <span className="mr-2">My Cart</span>
      <span className="bg-cian rounded-xl py-1 px-4 text-badgeTxt">{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
