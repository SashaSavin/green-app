import userImg from 'assets/user-ico.jpeg';
import { ReactComponent as Dot } from 'assets/online-dot.svg';
import { useChatStore, useProfileStore } from 'store';
import { FiTrash } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

export const ChatHeader = () => {
  const { selectedUser } = useChatStore();
  const { removeContact } = useProfileStore();
  const navigate = useNavigate();

  const handleRemoveClick = () => {
    removeContact(selectedUser);
    navigate('/find');
  };

  return (
    <div className="bg-[#F7F7FC] top-0 sticky flex items-center justify-between p-2">
      <div className="flex">
        <img src={userImg} alt="logo" className="w-[60px] h-[60px] rounded" />
        <div>
          <h2 className="font-bold capitalize ml-3 text-2xl">{selectedUser}</h2>
          <p className="flex items-center gap-2 text-gray-500 capitalize ml-3 text-2sm">
            <Dot />в сети
          </p>
        </div>
      </div>
      <div className="mr-10">
        <button onClick={() => handleRemoveClick()}>
          <FiTrash />
        </button>
      </div>
    </div>
  );
};
