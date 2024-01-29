import useAPI from "../../../services/ShopAPI";
import { MoonLoader } from "react-spinners";
import Card from "../../common/Card";

const Menswear = () => {
  const { data, loading, error } = useAPI("https://fakestoreapi.com/products/category/men's clothing");
  return (
    <div>
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
      <h2>MEN'S APARREL</h2>
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

export default Menswear;
