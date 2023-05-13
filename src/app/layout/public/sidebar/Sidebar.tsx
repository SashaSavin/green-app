import user from 'assets/user-logo.png';
import { useState } from 'react';
import { FiArrowDown, FiArrowUp } from 'react-icons/fi';
import { BsTelephoneMinusFill } from 'react-icons/bs';
import { CompanionCard } from './components/CompanionCard';
import useToggleStore from 'store/useToggleStore';
import { useNavigate } from 'react-router-dom';
import { ProfileSettings } from './components/ProfileSettings';

const data = [
  {
    id: 1,
    name: 'Username 1',
    message: 'You have a new message!'
  },
  {
    id: 2,
    name: 'Username 2',
    message: 'You have a new message!'
  },
  {
    id: 3,
    name: 'Username 3',
    message: 'You have a new message!'
  },
  {
    id: 4,
    name: 'Username 4',
    message: 'You have a new message!'
  }
];

export const Sidebar = () => {
  const [toggle, setToggle] = useState<boolean>(true);
  const [isActive, setActive] = useState<number | null>(null);
  const [openProfile, setOpenProfile] = useState<boolean>(false);
  const { showPage, togglePage } = useToggleStore();
  const navigate = useNavigate();

  const handleClick = (itemId: number) => {
    setActive((prevState) => (prevState === itemId ? null : itemId));
    navigate('/chat', { state: { user: isActive } });
  };

  const handleChangePage = () => {
    togglePage();
    if (showPage) {
      navigate('/find');
    }
  };

  return (
    <>
      {openProfile ? (
        <ProfileSettings setOpenProfile={setOpenProfile} />
      ) : (
        <div className="px-10 mt-8 font-serif content-center ">
          <div className="flex  justify-between mb-8 mt-5 items-center ml-3 ">
            <img
              onClick={() => setOpenProfile(!openProfile)}
              src={user}
              alt="user"
              className="cursor-pointer hover:opacity-50"
            />

            <div className="flex gap-5">
              <button className="mr-3 hover:opacity-50" onClick={() => setToggle(!toggle)}>
                {toggle ? <FiArrowDown /> : <FiArrowUp />}
              </button>
              <button className="hover:opacity-50" onClick={handleChangePage}>
                <BsTelephoneMinusFill />
              </button>
            </div>
          </div>

          {toggle && (
            <div>
              <input
                type="search"
                placeholder="Искать.."
                className="rounded-3xl border-2 w-[340px] flex p-3 items-start"
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
      )}
    </>
  );
};
