import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import reportWebVitals from './reportWebVitals';
import Root from "./routes/root";

import ErrorPage from "./error-page";
import Movie,{loader as movieloader} from "./routes/movie";
import Homes from "./routes/home";
import Singup from './routes/singup';

import Options from './options';
import Addmovie from './routes/addmovie';
import Editmovie,{loader as editmovieloader} from './routes/editmovie';
import store from './app/store';
import { Provider } from 'react-redux';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,

    children:[

        {
         path: "/",
        element: <Homes/>
        },



      {
        path: "/movies/:movieId",  
        element: <Movie/>,
        loader: movieloader
   
     },
     {
      path: '/add-movie',
      element: <Addmovie/>
     },
     {
       
      path: '/singup',
      element:<Singup/>


     },

     {
      path: '/edit-movie/:movieId',
      element: <Editmovie/>,
      loader:editmovieloader
     },
     {
  
      path: "/options/:optionsid",
      element: <Options/>
    
    
     },

    ]
  }

]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//code done by 1;26
//1.24done
