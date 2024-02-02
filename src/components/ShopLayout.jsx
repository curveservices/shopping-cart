import { NavLink, Outlet } from "react-router-dom";
import styles from "../styles/ShopLayout.module.css";

const ShopLayout = () => {

  return (
    <div className={styles.layout}>
      <nav className={styles.sidebar}>
        <NavLink to="/shop">All Products</NavLink>
        <NavLink to="womenswear">Women's wear</NavLink>
        <NavLink to="menswear">Men's wear</NavLink>
        <NavLink to="jewelery">Jewelery</NavLink>
        <NavLink to="electronics">Electronics</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default ShopLayout;
