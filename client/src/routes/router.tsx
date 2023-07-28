import SignUp from '@pages/SignUp';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/signup',
    element: <SignUp />,
  },
]);

export default router;
