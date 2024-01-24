import { NavLink, Outlet } from "react-router-dom";
import Breadcrumbs from "../pages/Breadcrumbs";
import style from "../styles/RootLayout.module.css";

const RootLayout = () => {
  return (
    <div className={style.header}>
      <header>
        <nav>
          <h1>Shopping Cart</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="shop">Shop</NavLink>
          <NavLink to="help">Help</NavLink>
          <NavLink to="basket">
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="basket-number"></span>
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
