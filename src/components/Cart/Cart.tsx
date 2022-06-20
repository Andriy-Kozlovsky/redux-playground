import {useSelector} from "react-redux";

import Card from "../UI/Card";

import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector((state: any) => state.cart.items);

  return (
    <Card whiteBg={false}>
      <h2 className="text-xl font-bold mb-2">Your Shopping Cart</h2>
      <ul className="my-3 p-4 space-y-4">
        {cartItems.map((item: any) => (
          <CartItem
            key={item.id}
            id={item.id}
            price={item.price}
            quantity={item.quantity}
            title={item.name}
            total={item.totalPrice}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
