import ProductItem from "./ProductItem";

const Products = () => {
  return (
    <section>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem description="This is a first product - amazing!" price={6} title="Test" />
      </ul>
    </section>
  );
};

export default Products;
