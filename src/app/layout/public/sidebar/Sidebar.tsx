import user from 'assets/user-logo.png';
import { useState } from 'react';
import { FiArrowDown, FiArrowUp } from 'react-icons/fi';
import { CompanionCard } from './components/CompanionCard';

const data = [
  {
    id: 1,
    name: 'Username',
    message: 'You have a new message!'
  },
  {
    id: 2,
    name: 'Username',
    message: 'You have a new message!'
  },
  {
    id: 3,
    name: 'Username',
    message: 'You have a new message!'
  },
  {
    id: 4,
    name: 'Username',
    message: 'You have a new message!'
  }
];

export const Sidebar = () => {
  const [toggle, setToggle] = useState<boolean>(true);
  const [isActive, setActive] = useState<number | null>(null);

  const handleClick = (itemId: number) => {
    setActive((prevState) => (prevState === itemId ? null : itemId));
  };

  return (
    <div className="px-10 mt-8 font-serif content-center ">
      <div className="flex justify-between">
        <img src={user} alt="user" className="mb-8 mt-3 ml-3 cursor-pointer" />
        <button className="mr-3" onClick={() => setToggle(!toggle)}>
          {toggle ? <FiArrowDown /> : <FiArrowUp />}
        </button>
      </div>

      {toggle && (
        <div>
          <input
            type="search"
            placeholder="Искать.."
            className="rounded-3xl border-2 max-w-sm flex p-3 items-start"
          />

          <div className="inline-flex p-2 max-w-sm font-serif mt-3 py-3">
            <button className="bg-white hover:bg-[#128C7E] hover:text-white text-gray-500 py-4 px-4 rounded-l">
              Избранное
            </button>
            <button className="bg-white hover:bg-[#128C7E] hover:text-white text-gray-500 py-4 px-4 rounded">
              Друзья
            </button>
            <button className="bg-white hover:bg-[#128C7E] hover:text-white text-gray-500 py-4 px-4 rounded-r">
              Контакты
            </button>
          </div>
        </div>
      )}
      {data.map(({ name, message }, idx: number) => {
        return (
          <CompanionCard
            key={idx}
            id={idx}
            name={name}
            message={message}
            isActive={isActive}
            handleClick={handleClick}
          />
        );
      })}
    </div>
  );
};
