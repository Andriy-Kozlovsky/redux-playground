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
      <Card whiteBg>
        <header className="flex justify-between align-baseline">
          <h3 className="text-xl font-bold">{title}</h3>
          <div className="bg-itemTxt text-white px-5 py-1 text-2xl rounded-full">
            ${price.toFixed(2)}
          </div>
        </header>
        <p className="text-itemTxt">{description}</p>
        <div className="flex justify-end">
          <button className="bg-transparent border border-productButtonTx text-productButtonTx py-2 px-5 rounded-md hover:bg-productButtonHover hover:text-white">
            Add to Cart
          </button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;