import React, { createContext, useEffect, useState } from 'react';

export default function useAPI(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    setLoading(true);
    setLoaded(false);
    setError(null);

    fetch(url, { signal })
      .then((response) => response.json())
      .then((responseData) => {
        if (!signal.aborted) {
          setData(responseData);
          setLoaded(true);
          setLoading(false);
        }
      })
      .catch((error) => {
        if (!signal.aborted) {
          setError(error.message);
          setData(null);
          setLoading(false);
        }
      });
      
    return () => abortController.abort(); // Cleanup on component unmount

  }, [url]);

  return { data, loading, loaded, error };
}

//Context
export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const productAPI = useAPI("https://fakestoreapi.com/products/");

  const [cartItems, setCartItems] = useState({});

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const productId in cartItems) {
      const product = cartItems[productId];
      if (product.quantity > 0) {
        totalAmount += product.quantity * product.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (product) => {
    setCartItems((prev) => {
      return { ...prev, [product.id]: { ...product, quantity: (prev[product.id]?.quantity || 0) + 1 } };
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[productId]) {
        if (updatedCart[productId].quantity > 1) {
          updatedCart[productId].quantity -= 1;
        } else {
          delete updatedCart[productId];
        }
      }
      return updatedCart;
    });
  };

  const updateCartItemCount = (newAmount, productId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[productId]) {
        updatedCart[productId].quantity = newAmount;
      }
      return updatedCart;
    });
  };

  const contextValue = { 
    cartItems, 
    addToCart, 
    removeFromCart, 
    productAPI, 
    updateCartItemCount,
    getTotalCartAmount,
   };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
    );
};

// export const useCart = () => {
//   const context = useContext(ShopContext);
//   if (!context) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// };

// const CartContext = createContext();

// export const CartProvider = (props) => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (id) => {
//     setCart((prev) => ({...prev, [id]: prev[id] + 1}));
//   };

//   const removeFromCart = (id) => {
//     setCart((prev) => ({...prev, [id]: prev[id] - 1}))
//   }

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
//       {props.children}
//     </CartContext.Provider>
//   );
// };
