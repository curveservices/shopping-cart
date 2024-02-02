import { useContext } from "react";
import { ShopContext } from "../utils/ShopContext";
import styles from "../styles/Card.module.css";

const Card = ({ data }) => {
  const { id, title, image, price } = data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmmout = cartItems[id] ? cartItems[id].quantity : 0;

  const handleAddtoCart = () => {
    addToCart(data);
  };

  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img src={image} alt={title} className={styles.img} />
      </div>
      <h3 className={styles.productTitle}>{title}</h3>
      <p>£{price}</p>
      <div className={styles.btnContainer}>
        <button onClick={handleAddtoCart}>
          Add To Cart {cartItemAmmout > 0 && <> ({cartItemAmmout})</>}
        </button>
      </div>
    </div>
  );
};

export default Card;
