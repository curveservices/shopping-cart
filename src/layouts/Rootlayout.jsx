import { NavLink, Outlet } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import style from "./RootLayout.module.css";

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
