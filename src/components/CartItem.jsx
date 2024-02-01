import { useContext } from 'react';
import { ShopContext } from '../utils/ShopContext';
import styles from "../styles/CartItem.module.css";

const CartItem = ({ itemId }) => {
    const { cartItems, addToCart, removeFromCart , updateCartItemCount } = useContext(ShopContext);
    const item = cartItems[itemId];

    if (!item) {
        return null
    }
    const { id, title, image, price} = item;

    return (
        <tbody>
            <tr itemScope>
                <td>
                    <div className={styles.imgContainer}>
                        <img src={image} alt={title} className={styles.cartImage}/>
                        <h3 className={styles.productTitle}>{title}</h3>
                    </div>
                </td>
                <td>
                    <p>£{price}</p>
                </td>
                <td>
                    <div className={styles.btnContainer}>
                    <button className={styles.plusMinus} onClick={() => removeFromCart(id)}>
                        -
                    </button>
                    <input value={item.quantity} onChange={(e) =>updateCartItemCount(Number(e.target.value), id)}/>
                    <button className={styles.plusMinus} onClick={() => addToCart(item)}>
                        +
                    </button>
                    </div>
                </td>
            </tr>
        </tbody>
    );
}
 
export default CartItem;