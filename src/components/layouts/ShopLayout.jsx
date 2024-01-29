import { NavLink, Outlet } from "react-router-dom";
import styles from "../styles/ShopLayout.module.css";

const ShopLayout = () => {
  return (
    <div className={styles.layout}>
      <nav className={styles.sidebar}>
        <NavLink to="shop/menswear">Men's wear</NavLink>
        <NavLink to="shop/womenswear">Women's wear</NavLink>
        <NavLink to="shop/jewelery">Jewelery</NavLink>
        <NavLink to="shop/electronics">Electronics</NavLink>
      </nav>
      <main>
        <Outlet styles={styles.content} />
      </main>
    </div>
  );
};

export default ShopLayout;
