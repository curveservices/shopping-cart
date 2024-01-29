import useAPI from "../../../services/ShopAPI";
import { useState } from "react";

import PageLayout from "../../common/PageLayout";

const Jewelery = () => {
  const { data, loading, error } = useAPI("https://fakestoreapi.com/products/category/jewelery");
  const [cart, setCart] = useState([]);
  
  const addToCart = (item) => {
    console.log('add to cart', item)
    setCart((prevCart) => [...prevCart, item])
  };
  
  return (
    <PageLayout 
    data={data}
    loading={loading}
    error={error}
    addToCart={addToCart}
  />
  );
};

export default Jewelery;
