import ProductItem from "./ProductItem";

const DUMMY_PRODUCTS = [
  {id: "p1", price: 6, title: "My First Book", description: "The first book i ever wrote"},
  {id: "p2", price: 12, title: "My Second Book", description: "The second book i ever wrote"},
];

const Products = () => {
  return (
    <section>
      <h2 className="text-white text-center text-2xl my-8 uppercase font-bold">
        Buy your favorite products
      </h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            description={product.description}
            id={product.id}
            price={product.price}
            title={product.title}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
