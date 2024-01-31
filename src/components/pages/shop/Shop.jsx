import { MoonLoader } from "react-spinners";
import Card from "./Card";
import styles from '../../styles/AllShopPage.module.css'
import { useContext, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import { useEffect } from "react";

const Shop = () => {
 
  // const {data, loading, error } = useAPI("https://fakestoreapi.com/products/");
  const [cart, setCart] = useState([]);
  const { addToCart, cartItems, productAPI } = useContext(ShopContext)

  useEffect(() => {
    productAPI.data
    productAPI.loading
    productAPI.error
  })
  
  return (
    <>
    {productAPI.loading &&
      <div className={styles.spinner}>
           <MoonLoader
        className={styles.spinner}
        color="black"
        loading={productAPI.loading}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div>
    }
    {productAPI.error && (
      <div>
        {`There was a problem fetching the item data = ${error}`}
      </div>
    )}
     <div className={styles.cardContainer}>
     <h2 className={styles.header}>All Shop Items</h2>
      {productAPI.data &&
        productAPI.data.map((product) => (
          <Card key={product.id} data={product} />
        ))}
      </div>
  </>
  );
};

export default Shop;