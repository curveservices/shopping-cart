import { NavLink, Outlet } from "react-router-dom";
import Breadcrumbs from "../pages/Breadcrumbs";
import style from "../styles/RootLayout.module.css";


const cartItemsCount = 0;

const RootLayout = () => {
  return (
    <div className={style.header}>
      <header>
        <nav>
          <h1>Shopping Cart</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="shop">Shop</NavLink>
          <NavLink to="cart">
            <i className="fa-solid fa-cart-shopping"></i>
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
