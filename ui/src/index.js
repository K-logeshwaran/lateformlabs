import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  Link,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/error_comp';
import Blog from './components/blog';
import Dashboard from './components/admin/admin_dashboard';
import Editor from './components/admin/blog_editor';
import AllPosts from './components/allPosts';
import NewPost from './components/admin/create_post';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world! <Link to={"blogs"}>blogs</Link></div>,
    errorElement :<ErrorPage/>,
  },
  {
    path:"/blogs",
    element:<App/>,
    errorElement :<ErrorPage/>

  },
  {
    path:"/blog/:uploadedAt/:name",
    element:<Blog/>,
    errorElement :<ErrorPage/>

  },
  {
    path:"admin/dashboard",
    element:<Dashboard/>,
    errorElement :<ErrorPage/>,
    children:[
      {
        path:"allposts",
        element:<AllPosts/>,
        errorElement :<ErrorPage/>,
      },
      {
        path:"edit/:filename",
        element:<Editor/>,
        errorElement :<ErrorPage/>
    
      },
      {
        path:"newPost",
        element:<NewPost/>,
        errorElement :<ErrorPage/>
      }
    ]

  },
  
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
