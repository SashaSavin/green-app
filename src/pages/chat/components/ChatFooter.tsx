import { IoSend } from 'react-icons/io5';
import { BsEmojiSmile } from 'react-icons/bs';

export const ChatFooter = () => {
  return (
    <div className="fixed  bottom-0 w-screen p-6 flex  bg-[#F6F6F6]">
      <button className="ml-20 pr-10 opacity-50">
        <BsEmojiSmile />
      </button>

      <div className="inline-flex pl-35">
        <input
          type="text"
          placeholder="Напишите что-нибудь..."
          className=" rounded-xl p-3 flex  w-[700px]"
        />
        <button className="ml-10 hover:opacity-30 ">
          <IoSend />
        </button>
      </div>
    </div>
  );
};
