import Layout from 'components/layout/Layout';
import ChatList from 'components/chats/ChatList';

function ChatsPage() {
  return (
    <Layout title="Messages">
      <ChatList />
    </Layout>
  );
}

export default ChatsPage;
