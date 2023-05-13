import user from 'assets/companion.png';
import { ReactComponent as Dot } from 'assets/online-dot.svg';

export const ChatHeader = () => {
  return (
    <div className="bg-[#F7F7FC] top-0 sticky flex items-center justify-between p-2">
      <div className="flex">
        <img src={user} alt="logo" />
        <div>
          <h2 className="font-bold capitalize ml-3 text-2xl">name</h2>
          <p className="flex items-center gap-2 text-gray-500 capitalize ml-3 text-2sm">
            <Dot />в сети
          </p>
        </div>
      </div>
    </div>
  );
};
