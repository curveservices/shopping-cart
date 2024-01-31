import { Link, useParams } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import styles from './styles/AllShopPage.module.css'
import Card from "./pages/shop/Card";
import { useContext } from "react";
import { ShopContext } from "./context/ShopContext";

const PageLayout = ({ data, loading, error }) => {
    const { id } = useParams()
    const { addToCart, cartItems } = useContext(ShopContext)
    return (
    <>
      {loading &&
      <div className={styles.spinner}>
        <MoonLoader
          color="black"
          loading={loading}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        </div>
      }
      {error && (
        <div>
          {`There was a problem fetching the item data = ${error}`}
        </div>
      )}
      <div className={styles.cardContainer}>
        {data &&
          data.map((product) => (
              <Card data={product}/>
            
      
          ))}
      </div>
    </>
  );
}
export default PageLayout;