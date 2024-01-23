import { NavLink, Outlet } from "react-router-dom";
import styles from '../styles/ShopLayout.module.css'

const ShopLayout = () => {
    return (
       <div className={styles.layout}>
            <nav className={styles.sidebar}>
                <NavLink to='menswear'>Mens wear</NavLink>
                <NavLink to='womenswear'>Womens wear</NavLink>
                <NavLink to='jewelery'>Jewelery</NavLink>
                <NavLink to='electronics'>Electronics</NavLink>
            </nav>
            <main>
                <Outlet />
            </main>   
        </div>
        )
    };
 
export default ShopLayout;