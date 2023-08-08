import App from 'App';
import LoginPage from 'pages/LoginPage';
import SignUpPage from 'pages/SignUpPage';
import DateDiscoverPage from 'pages/DateDiscoverPage';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <LoginPage /> },
      { path: '/signup', element: <SignUpPage /> },
      { path: '/discover', element: <DateDiscoverPage /> },
    ],
  },
]);

export default router;
