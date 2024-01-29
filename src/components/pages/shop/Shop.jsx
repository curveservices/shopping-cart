import useAPI from "../../../services/ShopAPI";
import { MoonLoader } from "react-spinners";
import Card from "../../common/Card";
import { useState } from "react";
import styles from '../../styles/AllShopPage.module.css'
import { Link } from "react-router-dom";

const Shop = () => {
 
  const {data, loading, error } = useAPI("https://fakestoreapi.com/products/");
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
   
      {loading &&
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
       <div className={styles.cardContainer} key={data} >
        {data &&
          data.map(({ id, title, image, price }) => (
            <Link to={`/shop/${id}`} key={id}>
            <Card 
            title={title} 
            image={image} 
            price={price}
            onClick={addToCart}
            />
            </Link>
          ))}
      </div>
    </>
  );
};

export default Shop;
