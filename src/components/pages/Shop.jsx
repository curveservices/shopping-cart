import useAPI from "../../utils/ShopAPI";
import { MoonLoader } from "react-spinners";
import Card from "../common/Card";
import { useState } from "react";

const Shop = () => {
  const { data, loading, error } = useAPI("https://fakestoreapi.com/products/");
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    console.log('add to cart', item)
    setCart((prevCart) => [...prevCart, item])
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
          data.map(({ id, category, title, image, price, description }) => (
            <Card 
            key={id} 
            category={category} 
            title={title} 
            image={image} 
            price={price}
            description={description}
            addToCart={addToCart}
            />
          ))}
      </div>
    </div>
  );
};

export default Shop;
