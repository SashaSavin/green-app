import { useState } from 'react';

export const Menu = () => {
  const [activeButton, setActiveButton] = useState<string>('Контакты');

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <div>
      <input
        type="search"
        placeholder="Найти контакт.."
        className="rounded-3xl
                  border-2
                  w-[340px]
                  flex
                  p-3
                  items-start"
      />

      <div
        className="inline-flex
                  p-2
                  max-w-sm
                  font-serif
                  mt-3
                  py-3">
        <button
          className={`
                    py-4
                    px-4
                    rounded-l
                    ${
                      activeButton === 'Избранное'
                        ? 'bg-[#128C7E] text-white'
                        : 'bg-white hover:bg-[#128C7E] hover:text-white text-gray-500'
                    }`}>
          Избранное
        </button>
        <button
          className={`
                  py-4
                  px-4
                  rounded
                  ${
                    activeButton === 'Друзья'
                      ? 'bg-[#128C7E] text-white'
                      : 'bg-white hover:bg-[#128C7E] hover:text-white text-gray-500'
                  }`}>
          Друзья
        </button>
        <button
          className={`
                  py-4
                  px-4
                  rounded-r
                  ${
                    activeButton === 'Контакты'
                      ? 'bg-[#128C7E] text-white'
                      : 'bg-white hover:bg-[#128C7E] hover:text-white  text-gray-500'
                  }`}
          onClick={() => handleButtonClick('Контакты')}>
          Контакты
        </button>
      </div>
    </div>
  );
};
