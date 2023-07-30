import App from 'App';
import Home from 'pages/Home';
import SignUp from 'pages/SignUp';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: '/signup', element: <SignUp /> },
    ],
  },
]);

export default router;
