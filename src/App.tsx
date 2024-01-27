import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import Home from './Components/Home/Home'
import Layout from './Components/Layout/Layout';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';
import SinglePost from './Components/singlePost/singlePost';

function App() {

  const routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "login", element: <Login /> },
        { path: `posts/:id`, element: <SinglePost /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return(
    <>
    <RouterProvider router={routes}>

    </RouterProvider>
   
    </>
  )
}

export default App
