import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import MoonLoader from "react-spinners/MoonLoader";

const ShopLayout = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)    

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then((response ) => {
        if (!response.ok) {
            throw new Error(
            `This is a HTTP error: The Status is ${response.status}`
            );
        }
        return response.json()
        })
        .then((actualData) => {
        setData(actualData)
        setError(null)
        console.log(actualData)
        })
        .catch((error) => {
        setError(error.message)
        setData(null)
        })
        .finally(() => {
        setLoading(false);
        })
    }, []);

    return (
        <div className="shop-layout">
            {<MoonLoader
            className="spinner"
            color="white"
            loading={loading}
            size={100} 
            aria-label='Loading Spinner'
            data-testid='loader'/>}
        <h2>All Items</h2>
        <nav className="side-bar">
            <NavLink to='menswear'>Mens wear</NavLink>
            <NavLink to='womenswear'>Womens wear</NavLink>
            <NavLink to='jewelery'>Jewelery</NavLink>
            <NavLink to='electronics'>Electronics</NavLink>
        </nav>
        <Outlet />
        {error && (
            <div>{`There was a problem fetching the item data = ${error}`}</div>
        )}
        <div className="items-container">
            {data &&
            data.map(({id, title, image, price}) => (
            <div key={id} className='items' >
                <h4>{title}</h4>
                <img src={image}/>
                <p>{price}</p>
            </div>
            ))}
        </div>
        </div>
        )
    };
 
export default ShopLayout;