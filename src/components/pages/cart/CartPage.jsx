import { Link } from "react-router-dom";
import styles from "../../styles/AllShopPage.module.css";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import CartItem from "./CartItem";


const CartPage = () => {
  const { cartItems } = useContext(ShopContext);
  const uniqueItems = Array.from(new Set(cartItems.map((item) => item.id)));
  
  return (
    <>
    <div className={styles.header}>
      <h2>YOUR CART</h2>
    </div>
    <div className={styles.cardContainer}>
    {uniqueItems.map((itemId) => (
      <CartItem key={itemId} itemId={itemId}/>
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
