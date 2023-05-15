import { IoSend } from 'react-icons/io5';
import { useMutation } from 'react-query';
import { useState } from 'react';
import axios from 'axios';
import { useChatStore } from 'store';
import { apiTokenInstance, idInstance } from 'shared/services/apiConfigs';
import { formatPhoneNumber } from 'shared/utils';

export const ChatFooter = (): JSX.Element => {
  const { addMessage, selectedUser } = useChatStore();
  const [message, setMessage] = useState('');

  const chatId = formatPhoneNumber(selectedUser);

  const sendMessageMutation = useMutation((data: { chatId: string; message: string }) => {
    const url = `https://api.green-api.com/waInstance${idInstance}/SendMessage/${apiTokenInstance}`;
    return axios.post(url, data);
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessageMutation.mutate({ chatId, message });
    addMessage({ sender: 'me', text: message, user: selectedUser });
    setMessage('');
  };

  return (
    <div className="fixed  bottom-0 w-screen p-6 flex  bg-[#F6F6F6]">
      <form className="flex justify-around pl-35" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Напишите что-нибудь..."
          className=" rounded-xl p-3 flex  w-[700px]"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className="ml-5 hover:opacity-30 "
          type="submit"
          disabled={sendMessageMutation.isLoading}>
          <IoSend />
        </button>
      </form>
    </div>
  );
};
