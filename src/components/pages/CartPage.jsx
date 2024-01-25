import { useCart } from "../../utils/CartContext";

const CartPage = () => {
  const { cart } = useCart();

    return (
      <div className="cart">
        <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <div>
              <img src={item.image} alt={item.title} />
            </div>
            <div>
              <strong>Title:</strong> {item.title}
            </div>
            <div>
              <strong>Price:</strong> £{item.price}
            </div>
          </li>
        ))}
      </ul>
      <button>Go to Checkout</button>
    </div>
    );
  };
  
  export default CartPage;
  