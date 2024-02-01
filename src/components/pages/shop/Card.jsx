import { useContext } from "react";
import { ShopContext } from '../../context/ShopContext'
import styles from '../../styles/AllShopPage.module.css'

const Card = ({ data }) => {
  const { id, title, image, price, category } = data
  const { addToCart, cartItems } = useContext(ShopContext)
  const cartItemAmmout = cartItems[id] ? cartItems[id].quantity : 0;
  
  const handleAddtoCart = () => {
    addToCart(data);
  }
 
  return (
    <>
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.img}/>
      <div className={styles.productTitle}>
      <h3>{title}</h3>
      </div>
      
      <p>£{price}</p>
      <div className={styles.btnContainer}>
        <button onClick={handleAddtoCart}>
          Add To Cart {cartItemAmmout > 0 && <p> ({cartItemAmmout})</p>}</button>
      </div>
    </div>
    </>
  );
};
 
export default Card;