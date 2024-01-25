

const ItemCard = () => {
  return (
    <div className="items-container">
        {data &&
          data.map(({ id, category, title, image, price }) => (
            <div key={id} className="items">
              <h3>{title}</h3>
              <p>£ {price}</p>
              <p>{category}</p>
              <img src={image} alt={title}/>
              <div>
                <label htmlFor={`quantity-${id}`}>Qunatity</label>
                <input type="number" 
                id={`quantity-${id}`}
                value={cart[id] || 0}
                onChange={(e) => handleAddToCart(id, parseInt(e.target.value))}
                />
                <button
                onClick={() => handleAddToCart(id, (cart[id] || 0) + 1)}>
                  +
                </button>
                <button
                onClick={() => handleAddToCart(id, Math.max((cart[0] || 0) - 1, 0))}>
                  -
                  </button>
                  <button onClick={() => handleAddToCart(id, cart[1] || 1)}>
                    Add To Cart</button>
              </div>
            </div>
          ))}
      </div>
  )
}
 
export default ItemCard