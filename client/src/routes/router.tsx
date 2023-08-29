import App from 'App';
import { createBrowserRouter } from 'react-router-dom';
import LoginPage from 'pages/LoginPage';
import SignUpPage from 'pages/SignUpPage';
import DiscoverPage from 'pages/DiscoverPage';
import ChatsPage from 'pages/ChatsPage';
import ChatPage from 'pages/ChatPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <LoginPage /> },
      { path: '/signup', element: <SignUpPage /> },
      { path: '/discover', element: <DiscoverPage /> },
      { path: '/chats', element: <ChatsPage /> },
      { path: '/chats/:chatId', element: <ChatPage /> },
    ],
  },
]);

export default router;
