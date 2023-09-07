import { createBrowserRouter } from "react-router-dom";
import Menu from "../../Pages/Menu/Menu";
import Main from "../../Layout/Main";
import Dashboard from "../../Pages/Home/Dashboard/Dashboard";

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
    }
  ])

export default router;