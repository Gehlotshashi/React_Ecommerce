import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Products } from "./pages/Products";
import { Contact } from "./pages/Contact";
import { AppLayout } from "./component/Layout/AppLayout";
import { ErrorPage } from "./component/UI/ErrorPage";
import { Cart } from "./pages/Cart";
import { SingleProduct } from "./component/UI/singleProduct.jsx";

const router = createBrowserRouter([

{
  path:"/",
  element:<AppLayout/>,
  errorElement:<ErrorPage/>,
  children : [
    {
      path:"/",
      element :<Home />
    },
    {
      path:"about",
      element :<About />
    },
    {
      path:"products",
      element :<Products />
    },
    {
      path:"/singleproduct/:id",
      element:<SingleProduct />
    },
    
    {
      path:"contact",
      element :<Contact />
    },
    {
      path:"cart",
      element :<Cart />
    }
  ]
}

])

const App=()=>{

  return (
    <RouterProvider router ={router }>  </RouterProvider>
  );
}

export default App;
