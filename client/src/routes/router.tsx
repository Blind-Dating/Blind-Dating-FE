import { createBrowserRouter } from 'react-router-dom';
import SignUp from '../pages/SignUp';

const router = createBrowserRouter([
  {
    path: '/signup',
    element: <SignUp />,
  },
]);

export default router;
