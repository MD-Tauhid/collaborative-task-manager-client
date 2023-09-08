import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Dashboard from "../../Pages/Home/Dashboard/Dashboard";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import Error from "../../Pages/Error/Error";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Task from "../../Pages/Task/Task";
import AddTask from "../../Pages/AddTask/AddTask";

const router = createBrowserRouter([
    {
      path:'/',
      element: <PrivateRoute><Main></Main></PrivateRoute>,
      children:[
        {
            path: '/',
            element: <Dashboard></Dashboard>
        },
        {
          path: '/task',
          element: <Task></Task>
        },
        {
          path: '/addtask',
          element: <AddTask></AddTask>
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