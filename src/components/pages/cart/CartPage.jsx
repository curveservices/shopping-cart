import { Link } from "react-router-dom";
import styles from "../../styles/AllShopPage.module.css"
import { FaTrash } from "react-icons/fa";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const CartPage = () => {
  const { cartItems } = useContext(ShopContext)

    return (
      <>
      <div className={styles.header}>
        <h2>YOUR CART</h2>
      </div>
      <div  className={styles.cardContainer}>
        {cartItems &&
          <div className={styles.card}>
            <img src={cartItems.image} alt={cartItems.title} className={styles.img} />
            <p>{cartItems.title}</p>
            <p>{cartItems.decription}</p>
            <p>£{cartItems.price}</p>
          
            <div className={styles.btnContainer}>
              <button className={styles.minus}>-</button>
              <input type="number" />
              <button className={styles.plus}>+</button>
            </div>
            <button><i className="fa-solid fa-trash"></i> Remove</button>
          </div>
      }
        
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
  