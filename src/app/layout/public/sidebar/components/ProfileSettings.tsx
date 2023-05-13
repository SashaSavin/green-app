import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import change from 'assets/change-profile-img.png';

interface Props {
  setOpenProfile: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ProfileSettings = ({ setOpenProfile }: Props) => {
  const navigate = useNavigate();

  const handleBack = () => {
    setOpenProfile(false);
    navigate(-1);
  };

  return (
    <div className="ml-3 font-serif px-10">
      <div className="flex justify-start gap-3 mt-5">
        <button className="cursor-pointer" onClick={() => handleBack()}>
          <AiOutlineArrowLeft />
        </button>

        <h1 className="text-3xl font-bold font-sans">Профиль</h1>
      </div>

      <div className="w-[165px] mt-20 ml-20 flex">
        <img className="hover:opacity-80 cursor-pointer" src={change} alt="change pic" />
      </div>

      <div className="flex justify-start flex-col mt-20">
        <div>
          <h1 className="text-gray-500">Имя</h1>
          <p className="font-bold text-2xl">Пользователь профиля</p>
        </div>

        <div>
          <h1 className="text-gray-500 mt-10">Обо мне</h1>
          <p className="font-bold text-2xl">Информация о пользователе профиля. </p>
        </div>
      </div>
    </div>
  );
};
