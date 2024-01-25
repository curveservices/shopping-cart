import useAPI from "../../utils/ShopAPI";
import MoonLoader from "react-spinners/MoonLoader";
import { useState, useEffect } from "react";


const Shop = () => {
  const { data, loading, error } = useAPI("https://fakestoreapi.com/products/");
  const [cart, setCart] = useState({});

  // Load cart data from localStorage on component mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Save cart data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (id, quantity) => {
    // Update the cart in state
    setCart((prevCart) => ({
      ...prevCart,
      [id]: quantity,
    }));
  };

  return (
    <div className="content">
      {
        <MoonLoader
          className="spinner"
          color="black"
          loading={loading}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      }
      {error && (
        <div>
          {`There was a problem fetching the item data = ${error}`}
          </div>
      )}
      <div className="items-container">
        {data &&
          data.map(({ id, category, title, image, price }) => (
            <div key={id} className="items">
              <h3>{title}</h3>
              <p>£ {price}</p>
              <p>{category}</p>
              <img src={image} alt={title}/>
              <div>
                <label htmlFor={`quantity-${id}`}>Qunatity</label>
                <input type="number" 
                id={`quantity-${id}`}
                value={cart[id] || 0}
                onChange={(e) => handleAddToCart(id, parseInt(e.target.value))}
                />
                <button
                onClick={() => handleAddToCart(id, (cart[id] || 0) + 1)}>
                  +
                </button>
                <button
                onClick={() => handleAddToCart(id, Math.max((cart[0] || 0) - 1, 0))}>
                  -
                  </button>
                  <button onClick={() => handleAddToCart(id, cart[1] || 1)}>
                    Add To Cart</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Shop;
