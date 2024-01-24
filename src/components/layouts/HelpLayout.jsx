import { NavLink, Outlet } from "react-router-dom";

const HelpLayout = () => {
    return (
        <div className="shop-layout">
            <h2>Immutable Shopping Help</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Ut odio modi sed saepe provident hic impedit adipisci ullam sint? Expedita?
            </p>

            <nav>
                <NavLink to='faq'>View FAQ's</NavLink>
                <NavLink to='contact'>Contact Us</NavLink>
            </nav>
                <Outlet />
        </div>
    );
}
 
export default HelpLayout;