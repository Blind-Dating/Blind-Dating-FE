import NoHeaderFooterLayout from 'components/layout/NoHeaderFooterLayout';
import MessageList from 'components/messages/MessageList';

function MessagesPage() {
  return (
    <NoHeaderFooterLayout>
      <MessageList />
    </NoHeaderFooterLayout>
  );
}

export default MessagesPage;
