import Card from "../UI/Card";

import CartItem from "./CartItem";

const Cart = () => {
  return (
    <Card>
      <h2>Your Shopping Cart</h2>
      <ul>
        <CartItem price={6} quantity={3} title="Test Item" total={18} />
      </ul>
    </Card>
  );
};

export default Cart;
