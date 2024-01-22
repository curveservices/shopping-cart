import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

//Layouts
import RootLayout from "./layouts/Rootlayout";
//Pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="shop" />

      <Route path="*" element={<NotFound />} />
    </Route>
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
