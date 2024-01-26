import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom"
import styles from '../../styles/AllShopPage.module.css'

const ItemsDetails = () => {
    const { id } = useParams();
    const items = useLoaderData()
    const [itemmDetails, setItemDetails] = useState(null);

    

    const { title, image, price, description } = itemmDetails

    return (
    <div>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>£{price}</p>
      <p>{description}</p>
    </div>
    );
}
 
export default ItemsDetails;



 