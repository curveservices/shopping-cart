import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import styles from "../styles/AllShopPage.module.css"

const CartPage = () => {
  const { cart } = useCart();

    return (
      <>
      <div className={styles.header}>
        <h2>YOUR CART</h2>
      </div>
      <div  className={styles.cardContainer}>
        {cart && cart.map((item) => (
          <div className={styles.card}>
            <img src={item.image} alt={item.title} className={styles.img} />
            <p><strong>{item.title}</strong></p>
            <p><strong>{item.decription}</strong></p>
            <p><strong>£{item.price}</strong></p>
          
            <div className={styles.btnContainer}>
              <button className={styles.minus}>-</button>
              <input type="number" />
              <button className={styles.plus}>+</button>
            </div>
            <button><i className="fa-solid fa-trash"></i> Remove</button>
          </div>
        ))}
        
    </div>
    <div className={styles.checkout}>
    <p>Total £</p>
    <button ><Link to='/'>Check Out</Link></button>
    <Link to='/shop'>Keep Shopping</Link>
    </div>
    
    </>
    );
  };
  
  export default CartPage;
  