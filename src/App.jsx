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


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />

      <Route path="shop" element={<ShopLayout />}>
        <Route index element={<Shop />} />
        <Route path="electronics" element={<Electronics />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
