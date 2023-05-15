import { ChatHeader } from './ChatHeader';
import { ChatFooter } from './ChatFooter';
import { ChatWindow } from './ChatWindow';

export const ChatLayout = () => {
  return (
    <>
      <ChatHeader />
      <ChatWindow />
      <ChatFooter />
    </>
  );
};
