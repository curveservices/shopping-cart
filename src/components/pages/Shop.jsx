import useAPI from "../../utils/ShopAPI";
import MoonLoader from "react-spinners/MoonLoader";

const Shop = () => {
  const { data, loading, error } = useAPI("https://fakestoreapi.com/products/");
  return (
    <main className="">
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
    </main>
  );
};

export default Shop;
