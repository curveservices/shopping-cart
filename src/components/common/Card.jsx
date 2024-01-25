import { useCart } from "../../utils/CartContext";

const Card = ({ id, category, title, image, price, description }) => {
  const {addToCart } = useCart();

  return (
    <div key={id} className='items'>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{category}</p>
      <p>£{price}</p>
      <p>{description}</p>
      <button onClick={() => addToCart({ id, category, title, image, price })}>
        Add To Cart
      </button>
    </div>
  );
};
 
export default Card;