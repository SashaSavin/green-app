import img from 'assets/user-ico.jpeg';
import { useChatStore } from 'store';

interface Props {
  id: number;
  name: string;
  message?: string;
  isActive: number | null;
  handleClick: (id: number, name: string) => void;
}

export const CompanionCard = ({ id, name, isActive, handleClick }: Props) => {
  const { messages, selectedUser } = useChatStore();
  const filteredMessages = messages.filter((msg) => msg.user === selectedUser);
  const copyOfFilteredMessages = [...filteredMessages];
  const lastMessage = copyOfFilteredMessages.pop();

  const activeStyle = 'rounded-xl shadow-lg bg-[#c2d2d2]';
  return (
    <div
      onClick={() => handleClick(id, name)}
      className={`p-2
        max-w-sm
        mx-auto
        hover:rounded-xl
        hover:shadow-lg
      hover:bg-[#c2d2d2]
        flex items-center
        space-x-3
        cursor-pointer
        ${isActive === id && activeStyle}`}>
      <div className="shrink-0">
        <img className="h-12 w-12 rounded" src={img} />
      </div>
      <div>
        <div className="text-xl font-medium text-black">{name}</div>
        <p className="text-slate-500 text-sm truncate">
          {lastMessage?.text.length ? lastMessage?.text : 'Нет новых сообщений!'}
        </p>
      </div>
    </div>
  );
};
