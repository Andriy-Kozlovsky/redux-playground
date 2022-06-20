import Card from "../UI/Card";

import CartItem from "./CartItem";

const Cart = () => {
  return (
    <Card whiteBg={false}>
      <h2 className="text-xl font-bold mb-2">Your Shopping Cart</h2>
      <ul className="my-3 bg-itemBg p-4">
        <CartItem price={6} quantity={3} title="Test Item" total={18} />
      </ul>
    </Card>
  );
};

export default Cart;
