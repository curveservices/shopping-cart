import { Link } from "react-router-dom";
import { useCart } from "../../utils/CartContext";
import styles from '../styles/AllShopPage.module.css'

const Card = ({ id, title, image, price, description }) => {
  const { addToCart } = useCart();

  return (
    <>
    <div key={id} className={styles.card}>
      <Link to={id}>
      <img src={image} alt={title} className={styles.img}/>
      <h2>{title}</h2>
      <p>£{price}</p>
      <p>{description}</p>
      <div className={styles.btnContainer}>
        <button onClick={() => addToCart({ id, title, image, price, description })}
        >
          Add To Cart
        </button>
      </div>
      </Link>
    </div>
    </>
  );
};
 
export default Card;