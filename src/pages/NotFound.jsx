import { Link } from "react-router-dom";
import style from "../styles/NotFound.module.css";
import ripped from "../components/assets/404.webp";

const NotFound = () => {
  return (
    <>
      <div className={style.notFound}>
        <img src={ripped} className={style.img} />
        <div className={style.container}>
          <div className={style.top}>
            Page Not Found
              <Link to="/">Back Home</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
