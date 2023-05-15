import userImg from 'assets/user-ico.jpeg';
import { FiArrowDown, FiArrowUp } from 'react-icons/fi';
import { BsTelephoneMinusFill } from 'react-icons/bs';
import { CompanionCard, Menu } from '.';
import { useProfileStore } from 'store';

interface Props {
  toggle: boolean;
  isActive: number | null;
  setOpenProfile: React.Dispatch<React.SetStateAction<boolean>>;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  handleChangePage: () => void;
  handleClick: (itemId: number, name: string) => void;
}

export const Profile = ({
  toggle,
  setOpenProfile,
  setToggle,
  handleChangePage,
  handleClick,
  isActive
}: Props): JSX.Element => {
  const { user } = useProfileStore();

  return (
    <>
      <div
        className="px-10
            mt-8
            font-serif
            content-center">
        <div
          className="flex
            justify-between
            mb-8
            mt-5
            items-center
            ml-3 ">
          <div
            className="flex
             gap-3
             content-center
             text-center">
            <img
              onClick={() => setOpenProfile(true)}
              src={userImg}
              alt="user"
              className="cursor-pointer hover:opacity-50 rounded-full w-10 h-10"
            />

            <h4 className="text-xl">
              Вы: <small className="text-gray-700">id{user?.id}</small>
            </h4>
          </div>

          <div className="flex gap-5">
            <button className="mr-3 hover:opacity-50" onClick={() => setToggle(!toggle)}>
              {toggle ? <FiArrowDown /> : <FiArrowUp />}
            </button>
            <button className="hover:opacity-50" onClick={handleChangePage}>
              <BsTelephoneMinusFill />
            </button>
          </div>
        </div>

        {toggle && <Menu />}

        {user?.contacts ? (
          user?.contacts.map((name, idx: number) => {
            return (
              <CompanionCard
                key={idx}
                id={idx}
                name={name}
                isActive={isActive}
                handleClick={handleClick}
              />
            );
          })
        ) : (
          <div className="text-center mt-3 text-gray-500">Список контактов пуст..</div>
        )}
      </div>
    </>
  );
};
