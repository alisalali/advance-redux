import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const ProductItem = (props) => {
  const { id, title, price, description } = props;

  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const totalItems = useSelector((state) => state.cart.totalQuantity);

  const addItemHandler = (event) => {
    console.log("add");
    dispatch(cartActions.addItemsToCart({ id, title, price }));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItemHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
