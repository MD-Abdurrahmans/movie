

import {
    createBrowserRouter
  } from "react-router-dom";
import Root from "../layouts/Root/Root";
import HomePage from "../pages/Home/HomePage";
import Category from "../components/category/Category";



const router = createBrowserRouter([

    {
       path:'/',
       element:<Root/>,
       children:[
        {
           path:'/',
           element:<HomePage/>
        },
        {
           path:'/:name',
           element: <Category></Category>
        },
    ]
    }
 ])



 
 export default  router