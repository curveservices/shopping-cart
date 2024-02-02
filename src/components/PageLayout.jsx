import { MoonLoader } from "react-spinners";
import styles from "../styles/AllShopPage.module.css";
import Card from "./Card";
import useAPI from "../utils/ShopContext";

const PageLayout = ({ apiEndpoint }) => {
  const currentAPI = useAPI(apiEndpoint);
  return (
    <>
      {currentAPI.loading && (
        <div className={styles.spinner}>
          <MoonLoader
            color="black"
            loading={currentAPI.loading}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
      {currentAPI.error && (
        <div>
          {`There was a problem fetching the item data = ${currentAPI.error}`}
        </div>
      )}

      <div className={styles.cardContainer}>
        {currentAPI.data &&
          currentAPI.data.map((product) => (
            <Card key={product.id} data={product} />
          ))}
      </div>
    </>
  );
};
export default PageLayout;
