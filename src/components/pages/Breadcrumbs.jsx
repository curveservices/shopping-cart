import { useLocation, Link } from "react-router-dom";
import style from "../styles/BreadCrumbs.module.css";

const Breadcrumbs = () => {
  const location = useLocation();

  let currentLink = "";
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;
      return (
        <div className={style.crumb} key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });
  return <div className={style.breadcrumbs}>{crumbs}</div>;
};

export default Breadcrumbs;
