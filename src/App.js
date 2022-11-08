
import './App.css';
import { createBrowserRouter} from 'react-router-dom';
import { router, RouterProvider } from "react-router-dom";
import Main from './Layout/Main';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import Login from './Pages/LoginAndRegistration/Login';
import Signup from './Pages/LoginAndRegistration/Signup';
import NotFound from './NotFound';
import Blog from './Pages/Blog/Blog';
import MyReviews from './Pages/Reviews/MyReviews';
import Addservices from './Pages/Services/Addservices';

function App() {


  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>, 
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/services', 
          element: <Services></Services>
        },

        {
          path: '/blog', 
          element: <Blog></Blog>
        },
        {
          path: '/Login', 
          element: <Login></Login>
        },

        {
            path: '/Signup', 
            element: <Signup></Signup>
        },
        
        {
          path: '/myreviews', 
          element: <MyReviews></MyReviews>
       },

       {
        path: '/addservices', 
        element: <Addservices></Addservices>
     },

        {
          path: "*",
          element: <NotFound></NotFound>,
        },
       
      ]
    }
  ]);
  return (
    <div>
      
         <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
