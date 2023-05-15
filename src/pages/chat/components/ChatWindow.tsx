import { ReactComponent as Info } from 'assets/info.svg';
import { useEffect, useRef } from 'react';
import { apiTokenInstance, idInstance } from 'shared/services/apiConfigs';
import { useChatStore } from 'store';

const RECEIVE_NOTIFICATION_URL = `https://api.green-api.com/waInstance${idInstance}/ReceiveNotification/${apiTokenInstance}`;
const DELETE_NOTIFICATION_URL = `https://api.green-api.com/waInstance${idInstance}/DeleteNotification/${apiTokenInstance}/{receiptId}`;

export const ChatWindow = () => {
  const { messages, selectedUser, addMessage } = useChatStore();
  const filteredMessages = messages.filter((msg) => msg.user === selectedUser);
  const lastMessageRef = useRef<any>(null);

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [filteredMessages]);

  useEffect(() => {
    const receiveMessages = async () => {
      try {
        const response = await fetch(RECEIVE_NOTIFICATION_URL);
        const data = await response.json();
        const deleteUrl = DELETE_NOTIFICATION_URL.replace('{receiptId}', `${data.receiptId}`);
        await fetch(deleteUrl, { method: 'DELETE' });

        if (data && data.body && data.body.typeWebhook === 'incomingMessageReceived') {
          const messageData = data.body.messageData.textMessageData.textMessage;
          const senderData = data.body.senderData;

          addMessage({
            sender: senderData.sender,
            text: messageData,
            user: selectedUser
          });

          const deleteUrl = DELETE_NOTIFICATION_URL.replace('{receiptId}', `${data.receiptId}`);
          await fetch(deleteUrl, { method: 'DELETE' });
        }
      } catch (error) {
        console.error('Error receiving messages:', error);
      }
    };

    const intervalId = setInterval(receiveMessages, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, [addMessage, selectedUser]);

  return (
    <div className="min-h-screen ">
      <div className="flex justify-center  mt-3 mb-5">
        <Info />
      </div>

      <div className="flex flex-col gap-5 ml-5 mr-10 overflow-y-auto max-h-[70vh]">
        {filteredMessages.map((msg, index) => (
          <div
            className={`bg-white rounded-xl p-3 w-[30%] ${
              msg.sender === 'me'
                ? 'bg-[#D7F8F4] text-gray-800 ml-auto'
                : 'bg-white rounded-xl p-3 w-[30%] text-gray-800 mr-auto'
            }`}
            key={index}
            ref={index === filteredMessages.length - 1 ? lastMessageRef : null}>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
