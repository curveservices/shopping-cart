import { NavLink, Outlet } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs"
import { FaShoppingCart} from "react-icons/fa";
import styles from "./styles/NavBar.module.css";
import { useContext } from "react";
import { ShopContext } from "./context/ShopContext";

const NavBar = () => {
const { cartItems } = useContext(ShopContext);
const cartItemsCount = Object.values(cartItems).reduce(
  (totalCount, item) => totalCount + item.quantity,
  0
)

  return (
    <div className={styles.header}>
      <header>
        <nav>
          <h1>Fake Shopper</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="shop">Shop</NavLink>
          <NavLink to="cart">
            <FaShoppingCart />
            ({ cartItemsCount })
          </NavLink>
        </nav>
        <Breadcrumbs />
      </header>
       <Outlet />
    </div>
  );
};

export default NavBar;
