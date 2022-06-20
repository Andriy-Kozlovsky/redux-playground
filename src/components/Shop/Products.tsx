import ProductItem from "./ProductItem";

const Products = () => {
  return (
    <section>
      <h2 className="text-white text-center text-2xl my-8 uppercase font-bold">
        Buy your favorite products
      </h2>
      <ul>
        <ProductItem description="This is a first product - amazing!" price={6} title="Test" />
      </ul>
    </section>
  );
};

export default Products;
