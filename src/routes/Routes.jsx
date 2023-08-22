import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Dashboard from "../layouts/Dashboard";
import Home from "../pages/home/home/Home";
import AllBooks from "../pages/home/AllBooks/AllBooks";
import BookDetails from "../shared/components/BookDetails/BookDetails";
import Login from "../shared/Login/login/Login";
import Register from "../shared/Login/register/Register";
import ResetForm from "../shared/Login/login/ResetForm";
import AddBook from "../Dashboard/Admin/AddBook";
import AddToCart from "../pages/AddToCart/AddToCart";
import AdminHome from "../Dashboard/Admin/AdminHome";
import Payment from "../pages/payment/Payment";
import PrivateRoute from "./PrivateRoute";
import Collections from "../shared/components/Collections/Collections";
import UserHome from "../Dashboard/Admin/UserHome";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: "/",
            element: <Home/>
          },
        {
            path: "/all-books",
            element: <AllBooks/>
          },
          {
            path: 'details/:id',
            element: <BookDetails></BookDetails>,
            loader: ({params}) => fetch(`https://book-verse-server-phi.vercel.app/singleBook/${params.id}`)
          },
        {
            path: "/addToCart",
            element: <AddToCart></AddToCart>
          },
        {
            path: "/payment",
            element:<PrivateRoute> <Payment/></PrivateRoute>
          },
        {
            path: "/login",
            element: <Login/>
          },
        {
            path: "/register",
            element: <Register/>
          },
        {
            path: "/forget",
            element: <ResetForm/>
        },
        {
          path: "/All",
            element: <Collections/>
        }
      ]
      
    },
    {
     path: 'dashboard',
     element: <Dashboard></Dashboard>,
     children:[
      {
        path: 'addBook',
        element: <AddBook></AddBook>
      },
      {
        path: 'adminHome',
        element: <AdminHome></AdminHome>
       },
       {
         path: 'userHome',
         element:<UserHome></UserHome>
       }
     ]
    }
  ]);