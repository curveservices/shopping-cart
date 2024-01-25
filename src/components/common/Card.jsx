
const Card = ({ category, title, image, price }) => {
 return(
   <div className='items'>
     <img src={image} alt={title} />
     <h2><b>{title}</b></h2>
     <p>{category}</p>
     <p>£{price}</p>
     <button onClick={() => addToCart(id)}>Add To Cart</button>
   </div>
 )
}
 
export default Card