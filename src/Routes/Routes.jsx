import { createBrowserRouter } from "react-router";
import Mainlayout from "../layout/Mainlayout";
import Homepage from "../Pages/Homepage";
import Books from "../Pages/Books";
import ErrorPage from "../Pages/ErrorPage";
import BookDetails from "../Pages/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout/>,
    children:[
      {
        index: true,
        element:<Homepage/>
      },
      {
        path:"/Books",
        element:<Books/>
      },
      {
    path:"/bookdetails/:bookid",
    element:<BookDetails/>,
    loader:()=>fetch('/booksData.json')
      }
    ],
    errorElement: <ErrorPage/>
  },
]);