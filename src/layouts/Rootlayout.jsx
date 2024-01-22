import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
    return (
        <div className="root-layout">
            <nav>
                <h1>Shopping Cart</h1>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='shop'>Shop</NavLink>
                <NavLink to='basket'><i className="fa-solid fa-cart-shopping"></i></NavLink>
            </nav>
            <Outlet />
        </div>
    );
}
 
export default RootLayout;