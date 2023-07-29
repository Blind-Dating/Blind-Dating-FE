import SignUp from 'pages/SignUp';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SignUp />,
    children: [],
  },
]);

export default router;
