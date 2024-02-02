import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../../utils/ShopContext";
import CartItem from "../../components/CartItem";
import styles from "../../styles/CartPage.module.css";

const CartPage = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const cartItemsArray = Object.values(cartItems);
  const navigate = useNavigate();

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ITEM</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
          </tr>
        </thead>
        {cartItemsArray.map((item) => (
          <CartItem key={item.id} itemId={item.id} />
        ))}
      </table>
      {totalAmount > 0 ? (
        <div className={styles.checkout}>
          <p>Sub Total £{totalAmount}</p>
          <div className={styles.btnContainer}>
            <button onClick={() => navigate("/")}>Check Out</button>
            <Link to="/shop">Keep Shopping</Link>
          </div>
        </div>
      ) : (
        <div className={styles.cartEmpty}>
          <h1>Your Cart is Empty</h1>
          <button onClick={() => navigate("/shop")}>Shop Now</button>
        </div>
      )}
    </>
  );
};

export default CartPage;
