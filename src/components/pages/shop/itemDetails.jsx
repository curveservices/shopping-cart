import {  useNavigate, useParams } from "react-router-dom";
import useAPI from "../../../services/ShopAPI";
import Card from "../../common/Card";
import styles from '../../styles/AllShopPage.module.css'
import { MoonLoader } from "react-spinners";

export default function ItemsDetails({title}) {
  const { id } = useParams()
  const { data, loading, error}  = useAPI("https://fakestoreapi.com/products/" + id)
  const navigate = useNavigate()

  const addToCart = (item) => {
    console.log('add to cart', item)
    setCart((prevCart) => [...prevCart, item])
    navigate('cart')
  };

    return (
      <>
      <div className={styles.header}>
        {data && <h2>{data.title}</h2>}
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
     
       <div className={styles.cardContainer}>
        {data &&
            <Card 
            image={data.image}
            title={data.title} 
            description={data.description} 
            price={data.price}
            addToCart={addToCart}
            navigate={navigate}
            />
        }
      </div>
    </>
    )
}
 




 