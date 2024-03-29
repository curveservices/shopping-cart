import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

//Layouts
import NavBar from "./components/NavBar";
import ShopLayout from "./components/ShopLayout";

//Pages
import Home from "./pages/Home";
import Shop from "./pages/shop/Shop";
import NotFound from "./pages/NotFound";
import Menswear from "./pages/shop/Menswear";
import Womenswear from "./pages/shop/Womenswear";
import Jewelery from "./pages/shop/Jewelery";
import Electronics from "./pages/shop/Electronics";
import CartPage from "./pages/cart/CartPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<NavBar />}>
      <Route path="/" element={<Home />} />

      <Route path="shop" element={<ShopLayout />}>
        <Route index element={<Shop />} />
        <Route path="menswear" element={<Menswear />} />
        <Route path="womenswear" element={<Womenswear />} />
        <Route path="jewelery" element={<Jewelery />} />
        <Route path="electronics" element={<Electronics />} />
      </Route>

      <Route path="cart" element={<CartPage />} />

      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
