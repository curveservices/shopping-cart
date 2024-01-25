import { NavLink } from "react-router-dom";

const Cart = ({ cartItems }) => {
  
    return (
      <div className="cart-container">
        <h1>Shopping Cart</h1>
        <div className="cart-items">
         
        </div>
        <button>Go to Checkout</button>
      </div>
    );
  };
  
  export default Cart;
  