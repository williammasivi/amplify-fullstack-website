import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter } from 'react-router-dom';
import LayoutRoute from './routes/LayoutRoute';
import './css/index.css';


const router = createBrowserRouter([
   {
      path: '/',
      element: <LayoutRoute />,
      children: [
         {
            path: 'home',
            element: <h1>Home</h1>
         },
         {
            path: 'about',
            element: <h1>About</h1>
         },
         {
            path: 'contact',
            element: <h1>Contact</h1>
         },
         {
            path: '*',
            element: <h1>404</h1>
         }
      ]
   }
]);

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
   <RouterProvider router={router} />
);