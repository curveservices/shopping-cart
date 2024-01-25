import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

//Layouts
import RootLayout from "./components/layouts/RootLayout";
import ShopLayout from "./components/layouts/ShopLayout";
import Electronics from "./components/pages/Electronics";
//Pages
import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop";
import NotFound from "./components/pages/NotFound";
import Menswear from "./components/pages/Menswear";
import Womenswear from "./components/pages/Womenswear";
import Jewelery from "./components/pages/Jewelery";
import Cart from "./components/pages/Cart";



const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />

        <Route path="shop" element={<ShopLayout />}>
          <Route index element={<Shop />} />
          <Route path="menswear" element={<Menswear />} />
          <Route path="womenswear" element={<Womenswear />} />
          <Route path="jewelery" element={<Jewelery />} />
          <Route path="electronics" element={<Electronics />} />
        </Route>

        <Route path="cart" element={<ShopLayout />}>
          <Route index element={<Cart />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
