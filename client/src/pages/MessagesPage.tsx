import Layout from 'components/layout/Layout';
import MessageList from 'components/messages/MessageList';

function MessagesPage() {
  return (
    <Layout title="Messages">
      <MessageList />
    </Layout>
  );
}

export default MessagesPage;
