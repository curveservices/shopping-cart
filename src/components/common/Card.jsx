import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import styles from '../styles/AllShopPage.module.css'

const Card = ({ id, title, image, price, description, category }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate()

  return (
    <>
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.img}/>
      <h3>{title}</h3>
      <p>£{price}</p>
      <p>{description}</p>
      <div className={styles.btnContainer}>
        <button onClick={() => { 
          addToCart({ id, title, image, price, description }); 
          navigate('/cart')}}
        >
          Add To Cart
        </button>
      </div>
    </div>
    </>
  );
};
 
export default Card;