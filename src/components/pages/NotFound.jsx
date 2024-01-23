import { Link } from 'react-router-dom';
import style from '../styles/NotFound.module.css'
import ripped from '../assets/404.webp'

const NotFound = () => {
    return (
        <>
        <div className={style.notFound}>
            <img src={ripped} className={style.img}/>
            <div className={style.container}>
                <div className={style.top}>
                    Error 404 Page Not found
                    <button><Link to='/'>Back Home</Link></button>
                </div>
            </div>
        </div>
        
        </>
    );
}
 
export default NotFound;