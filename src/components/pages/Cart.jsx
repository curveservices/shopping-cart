import { NavLink } from "react-router-dom";

const Cart = ({ cartItems }) => {
    const totalItems = Object.values(cartItems).reduce((acc, quantity) => acc + quantity, 0);
  
    return (
      <div className="cart-container">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/help">Help</NavLink>
          <NavLink to="/cart">Cart ({totalItems})</NavLink>
        </nav>
        <h1>Shopping Cart</h1>
        <div className="cart-items">
          {Object.entries(cartItems).map(([productId, quantity]) => (
            <div key={productId} className="cart-item">
              <p>{`Product ID: ${productId}, Quantity: ${quantity}`}</p>
            </div>
          ))}
        </div>
        <button>Go to Checkout</button>
      </div>
    );
  };
  
  export default Cart;
  