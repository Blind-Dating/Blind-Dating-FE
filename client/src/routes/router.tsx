import App from 'App';
import Home from 'pages/HomePage';
import SignUpPage from 'pages/SignUp/SignUpPage';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: '/signup', element: <SignUpPage /> },
    ],
  },
]);

export default router;
