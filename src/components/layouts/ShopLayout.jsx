import { NavLink, Outlet } from "react-router-dom";

const ShopLayout = () => {
    return (
       <div className="shop-layout">
            <nav className="side-bar">
                <NavLink to='menswear'>Mens wear</NavLink>
                <NavLink to='womenswear'>Womens wear</NavLink>
                <NavLink to='jewelery'>Jewelery</NavLink>
                <NavLink to='electronics'>Electronics</NavLink>
            </nav>
            <Outlet />
        </div>
        )
    };
 
export default ShopLayout;