import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/Root';
import ErrorPage from '../layouts/ErrorPage';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AllJobs from '../pages/AllJobs';
import JobDetails from '../pages/JobDetails';
import AddAJob from '../pages/AddAJob';
import AppliedJobs from '../pages/AppliedJobs';
import MyJobs from '../pages/MyJobs';
import Blogs from '../pages/Blogs';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/allJobs',
        element: <AllJobs />,
      },
      {
        path: '/job/:id',
        element: <JobDetails />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
      },
      {
        path: '/addAJob',
        element: <AddAJob />,
      },
      {
        path: '/appliedJobs',
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: '/myJobs',
        element: <MyJobs />,
      },
      {
        path: '/blogs',
        element: <Blogs />,
      },
    ],
  },
]);
