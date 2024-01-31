import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import styles from '../../styles/AllShopPage.module.css';

const CartItem = ({ itemId }) => {
    const { cartItems } = useContext(ShopContext);
    const item = cartItems.find((item) => item.id === itemId)

    if (!item) {
        return null
    }
    const { id, title, image, price } = item;
    return (
        <div className={styles.card}>
            <img src={image} alt={title} className={styles.img}/>
            <h3>{title}</h3>
            <p>£{price}</p>
        </div>
    );
}
 
export default CartItem;