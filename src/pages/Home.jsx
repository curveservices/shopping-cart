import styles from "../styles/Home.module.css"
import women from "../components/assets/womenswear.jpeg"
import men from "../components/assets/menswear.jpeg";
import electronics from "../components/assets/electronics.jpeg";
import jewelery from "../components/assets/jewelery.jpeg"
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
    <div className={styles.container}> 
        <Link to={"/shop/womenswear"} className={styles.box}>
          <img src={women} alt="women.s clothing" />
          <span>Women's Clothing</span>
        </Link>
      <Link to={"/shop/menswear"} className={styles.box}>
        <img src={men} alt="men's clothing" />
        <span>Men's Clothing</span>
      </Link>
      <Link to={"shop/jewelery"} className={styles.box}>
        <img src={jewelery} alt="jewelery" />
        <span>Jewelery</span>
      </Link>
      <Link to={"shop/electronics"} className={styles.box}>
        <img src={electronics} alt="electronics" />
        <span>Electronics</span>
      </Link>
    </div>
     </>
    );
};

export default Home;
