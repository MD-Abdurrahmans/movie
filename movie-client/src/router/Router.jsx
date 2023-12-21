

import {
    createBrowserRouter
  } from "react-router-dom";
import Root from "../layouts/Root/Root";
import HomePage from "../pages/Home/HomePage";
import Categories from "../pages/categories/Categories";



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
           path:'/category/:id',
           element:<Categories/>
        },
    ]
    }
 ])



 
 export default  router