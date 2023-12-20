

import {
    createBrowserRouter
  } from "react-router-dom";
import Root from "../layouts/Root/Root";
import HomePage from "../pages/Home/HomePage";



const router = createBrowserRouter([

    {
       path:'/',
       element:<Root/>,
       children:[
        {
           path:'/',
           element:<HomePage/>
        },
    ]
    }
 ])



 
 export default  router