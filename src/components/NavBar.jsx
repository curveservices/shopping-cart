import { NavLink, Outlet } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { ShopContext } from "../utils/ShopContext";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  const { cartItems } = useContext(ShopContext);
  const cartItemsCount = Object.values(cartItems).reduce(
    (totalCount, item) => totalCount + item.quantity,
    0,
  );

  const responsiveSideBar = () => {
    if (window.innerWidth <= 670) {
      className.remove(styles.sidebarShow);
      className.add(styles.sidbarHide);
    }
  };

  return (
    <div className={styles.header}>
      <header>
        <nav className={styles.sidebarShow}>
          <h1>Fake Shopper</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="shop">Shop</NavLink>
          <NavLink to="cart">
            <FaShoppingCart /> ({cartItemsCount})
          </NavLink>
        </nav>
        <Breadcrumbs />
      </header>
      <Outlet />
    </div>
  );
};

export default NavBar;
