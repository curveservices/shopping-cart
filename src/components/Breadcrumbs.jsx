import { useLocation, Link } from "react-router-dom";
import style from './BreadCrumbs.module.css'

const Breadcrumbs = () => {
    const location = useLocation();

    let currentLink = '';
    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map(crumb => {
            currentLink += `/${crumb}`
            return (
                <div className="crumb" key={crumb}>
                    <Link to={currentLink}>{crumb}</Link>
                </div>
            );
        })
    return (
        <div className={style.Breadcrumbs}>
            {crumbs}
        </div>
    );
}
 
export default Breadcrumbs;