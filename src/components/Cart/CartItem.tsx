const CartItem = ({
  title,
  quantity,
  total,
  price,
}: {
  title: string;
  quantity: number;
  total: number;
  price: number;
}) => {
  return (
    <li>
      <header>
        <h3>{title}</h3>
        <div>
          ${total.toFixed(2)} <span>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div>
        <div>
          x <span>{quantity}</span>
        </div>
        <div>
          <button>-</button>
          <button>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
