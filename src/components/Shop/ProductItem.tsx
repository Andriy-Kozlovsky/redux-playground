import Card from "../UI/Card";

const ProductItem = ({
  title,
  price,
  description,
}: {
  title: string;
  price: number;
  description: string;
}) => {
  return (
    <li>
      <Card>
        <header>
          <h3>{title}</h3>
          <div>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div>
          <button>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
