import useAPI from "../../../services/ShopAPI";
import { MoonLoader } from "react-spinners";
import Card from "../../common/Card";
import styles from '../../styles/AllShopPage.module.css'
import { Link } from "react-router-dom";
import { useState } from "react";

const Womenswear = () => {
  const { data, loading, error } = useAPI("https://fakestoreapi.com/products/category/women's clothing");
  const [cart, setCart] = useState([]);
  
  const addToCart = (item) => {
    console.log('add to cart', item)
    setCart((prevCart) => [...prevCart, item])
  };
  
  return (
    <>
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
     <div className={styles.cardContainer}>
      {data &&
        data.map(({ id, title, image, price, category }) => (
          <div key={id}>
            <h2 className={styles.header}>{category}</h2>
            <Link to={`/shop/${id}`} >
            <Card 
            key={id}
            title={title} 
            image={image} 
            price={price}
            onClick={addToCart}
            />
            </Link>
          </div>
        ))}
      </div>
  </>
  );
};

export default Womenswear;
