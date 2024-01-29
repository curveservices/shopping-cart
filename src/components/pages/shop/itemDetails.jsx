import {  useNavigate, useParams } from "react-router-dom";
import useAPI from "../../../services/ShopAPI";
import Card from "../../common/Card";
import styles from '../../styles/AllShopPage.module.css'
import { MoonLoader } from "react-spinners";

export default function ItemsDetails() {
  const { id } = useParams()
  const { data, loading, error}  = useAPI("https://fakestoreapi.com/products/" + id)

  const addToCart = (item) => {
    console.log('add to cart', item)
    setCart((prevCart) => [...prevCart, item])
    
  };

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
    
      
      {data &&
      <>
         <div >
          <h2 className={styles.header}>{data.title}</h2>
            <Card 
            image={data.image}
            title={data.title} 
            description={data.description} 
            price={data.price}
            addToCart={addToCart}
            />
        </div>
      </>
      }
    
  </>
  )
}
 




 