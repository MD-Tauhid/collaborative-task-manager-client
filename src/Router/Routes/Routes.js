import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Dashboard from "../../Pages/Home/Dashboard/Dashboard";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import Error from "../../Pages/Error/Error";

const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Dashboard></Dashboard>
        }
      ]
    },
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: '/signup',
      element: <Signup></Signup>
    },
    {
      path: '*',
      element: <Error></Error>
    }
  ])

export default router;