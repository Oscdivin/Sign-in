import {createBrowserRouter} from "react-router-dom"
import Layout from "../components/common/Layout"
import Regeter from "../pages/Auth/Regeter"
import Signin from "../pages/Auth/Signin"
import HomeSceen from "../pages/Screen/HomeSceen"
// import HomeSceen from "../pages/Home/HomeSceen"


export const mainRouter = createBrowserRouter([{
          children: [{
                    index: true,
                    element: <Regeter/>,
          },
          
          {
                    path:"/sign-in",
                    index: true,
                    element:<Signin/>,
          },
          {
                    index: true,
                    element: <HomeSceen/>,
                    path:"/HomeSceen",
          }
          ]
          
}])