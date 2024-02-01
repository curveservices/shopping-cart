import { useContext } from 'react';
import { ShopContext } from '../utils/ShopContext';
import styles from "../styles/Card.module.css";

const CartItem = ({ itemId }) => {
    const { cartItems, addToCart, removeFromCart , updateCartItemCount } = useContext(ShopContext);
    const item = cartItems[itemId];

    if (!item) {
        return null
    }
    const { id, title, image, price} = item;

    return (
        <div className={styles.card}>
            <img src={image} alt={title} className={styles.img}/>
            <h3>{title}</h3>
            <p>£{price}</p>
            <div className={styles.btnContainer}>
                <button className={styles.plusMinus} onClick={() => removeFromCart(id)}>
                    -
                </button>
                <input value={item.quantity} onChange={(e) =>updateCartItemCount(Number(e.target.value), id)}/>
                <button className={styles.plusMinus} onClick={() => addToCart(item)}>
                    +
                </button>

            </div>
        </div>
    );
}
 
export default CartItem;