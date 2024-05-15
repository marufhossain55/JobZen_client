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
import PrivateRoute from './PrivateRoute';
import UpdateJob from '../components/UpdateJob';

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
        // loader: ({ params }) =>
        //   fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
      },
      {
        path: '/addAJob',
        element: (
          <PrivateRoute>
            <AddAJob />
          </PrivateRoute>
        ),
      },
      {
        path: '/appliedJobs',
        element: (
          <PrivateRoute>
            <AppliedJobs></AppliedJobs>
          </PrivateRoute>
        ),
      },
      {
        path: '/myJobs',
        element: (
          <PrivateRoute>
            <MyJobs />
          </PrivateRoute>
        ),
      },
      {
        path: '/blogs',
        element: <Blogs />,
      },
      {
        path: '/updateJob/:id',
        element: <UpdateJob />,
      },
    ],
  },
]);
