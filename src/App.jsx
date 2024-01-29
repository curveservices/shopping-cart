import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

//Layouts
import RootLayout from "./components/layouts/RootLayout";
import ShopLayout from "./components/common/ShopLayout";

//Pages
import Home from "./components/pages/Home";
import Shop from "./components/pages/shop/Shop";
import NotFound from "./components/pages/NotFound";
import Menswear from "./components/pages/shop/Menswear";
import Womenswear from "./components/pages/shop/Womenswear";
import Jewelery from "./components/pages/shop/Jewelery";
import Electronics from "./components/pages/shop/Electronics";
import CartPage from './components/pages/CartPage';
import ItemDetails from "./components/pages/shop/itemDetails";



const router = createBrowserRouter(
  createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
      
        <Route path="shop" element={<ShopLayout />}>
          <Route index element={<Shop />} />
          <Route path=":id" 
          element={<ItemDetails/>}
          />

          <Route path="menswear" element={<Menswear />} />
          <Route path="womenswear" element={<Womenswear />} />
          <Route path="jewelery" element={<Jewelery />} />
          <Route path="electronics" element={<Electronics />} />
        </Route>
        
        <Route path="cart" element={<CartPage />} />
        
       
        
      
        <Route path="*" element={<NotFound />} />
      </Route>
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
