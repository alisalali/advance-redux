import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: 1,
    title: "Apple",
    price: 6,
    description: "red apple fruit its - amazing!",
  },
  {
    id: 2,
    title: "Grape",
    price: 3,
    description: "Fresh Grape fruit sauger and delicious ",
  },
  {
    id: 3,
    title: "Banana",
    price: 12,
    description: "Baby fresh banana fruit !",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {/* <ProductItem
          title="Test"
          price={6}
          description="This is a first product - amazing!"
        /> */}
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
