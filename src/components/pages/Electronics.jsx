import useAPI from "../../utils/ShopAPI";
import MoonLoader from "react-spinners/MoonLoader";
import Card from "../common/Card";

const Electronics = () => {
  const { data, loading, error } = useAPI("https://fakestoreapi.com/products/category/electronics");
  return (
    <div className="content">
    {
      <MoonLoader
        className="spinner"
        color="black"
        loading={loading}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    }
    {error && (
      <div>
        {`There was a problem fetching the item data = ${error}`}
        </div>
    )}
    <div className="items-container">
      {data &&
        data.map(({ id, category, title, image, price }) => (
          <Card
          key={id} 
          category={category} 
          title={title} 
          image={image} 
          price={price} />
        ))}
    </div>
  </div>
  );
};

export default Electronics;
