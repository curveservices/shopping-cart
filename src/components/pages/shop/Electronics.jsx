import { dataTagSymbol } from "@tanstack/react-query";
import PageLayout from "../../PageLayout";

const Electronics = () => { 
  return (
    <PageLayout apiEndpoint="https://fakestoreapi.com/products/category/electronics"/>
  );
};

export default Electronics;
