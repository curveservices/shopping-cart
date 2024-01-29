import { NavLink, Outlet } from "react-router-dom";
import Breadcrumbs from "../common/Breadcrumbs";
import { FaShoppingCart } from "react-icons/fa";
import style from "../styles/RootLayout.module.css";


const cartItemsCount = 0;

const RootLayout = () => {
  return (
    <div className={style.header}>
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
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
