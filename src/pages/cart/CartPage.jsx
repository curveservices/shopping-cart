import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../../utils/ShopContext";
import CartItem from "../../components/CartItem";
import styles from "../../styles/AllShopPage.module.css";


const CartPage = () => {
  const { cartItems , getTotalCartAmount } = useContext(ShopContext);
  const totalAmount  = getTotalCartAmount()
  const cartItemsArray = Object.values(cartItems);
  
  
  return (
    <>
    <div className={styles.header}>
      <h2>YOUR CART</h2>
    </div>
    <div className={styles.cardContainer}>
      {cartItemsArray.map((item) => (
        <CartItem key={item.id} itemId={item.id}/>
      ))}
    </div>
    {totalAmount > 0 ? (
      <div className={styles.checkout}>
      <p>Sub Total £{totalAmount}</p>
      <div className={styles.btnContainer}>
        <button><Link to='/shop'>Keep Shopping</Link></button>
        <button ><Link to='/'>Check Out</Link></button>
      </div>
    </div>
    ) : (
      <h1>Your Cart is Empty</h1>
    )}
  
  </>
  );
};

export default CartPage;
