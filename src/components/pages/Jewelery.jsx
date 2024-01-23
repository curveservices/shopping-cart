import useAPI from "../../utils/ShopAPI";
import { MoonLoader } from "react-spinners";

const Jewelery = () => {
  const { data, loading, error } = useAPI(
    "https://fakestoreapi.com/products/category/jewelery",
  );
  return (
    <div className="shop-layout">
      <div className="spinner">
        {
          <MoonLoader
            className="spinner"
            color="white"
            loading={loading}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        }
      </div>
      {error && (
        <div>{`There was a problem fetching the item data = ${error}`}</div>
      )}
      <div className="items-container">
        {data &&
          data.map(({ id, category, title, image, price }) => (
            <div key={id} className="items">
              <h4>{title}</h4>
              <div>{category}</div>
              <img src={image} />
              <p>£ {price}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Jewelery;
