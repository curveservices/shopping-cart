import useAPI from "../../../utils/ShopAPI";
import { MoonLoader } from "react-spinners";
import Card from "../../common/Card";
import { useState } from "react";
import styles from '../../styles/AllShopPage.module.css'

const Shop = () => {
 
  const { data, loading, error } = useAPI("https://fakestoreapi.com/products/",);
  const [cart, setCart] = useState([]);
  

  const addToCart = (item) => {
    console.log('add to cart', item)
    setCart((prevCart) => [...prevCart, item])
  };

  return (
    <>
    <div className={styles.header}>
      <h2>All Shop Items</h2>
    </div>
   
      {
        <MoonLoader
          className={styles.spinner}
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
       <div className={styles.cardContainer}>
        {data &&
          data.map(({ id, title, image, price }) => (
            <Card 
            key={id} 
            title={title} 
            image={image} 
            price={price}
            addToCart={addToCart}
            />
          ))}
      </div>
    </>
  );
};

export default Shop;
