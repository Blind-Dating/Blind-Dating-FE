import Layout from 'components/layout/Layout';
import ChatList from 'components/chat-list/ChatList';

function ChatsPage() {
  return (
    <Layout title="Messages">
      <ChatList />
    </Layout>
  );
}

export default ChatsPage;
