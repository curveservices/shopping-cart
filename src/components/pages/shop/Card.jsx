import { useContext } from "react";
import { ShopContext } from '../../context/ShopContext'
import styles from '../../styles/AllShopPage.module.css'

const Card = (props) => {
  const { id, title, image, price } = props.data
  const { addToCart, cartItems } = useContext(ShopContext)
  const cartItemAmmout = cartItems[id]
 
  return (
    <>
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.img}/>
      <h3>{title}</h3>
      <p>£{price}</p>
      <div className={styles.btnContainer}>
        <button onClick={() => addToCart(id)}>
          Add To Cart {cartItemAmmout > 0 && <>({cartItemAmmout})</>}</button>
      </div>
    </div>
    </>
  );
};
 
export default Card;