import img1 from '../../../assets/1.png';
import img2 from '../../../assets/2.png';
import img3 from '../../../assets/3.png';

export const Instruction = (): JSX.Element => {
  return (
    <div className="mt-5 flex flex-col font-serif text-gray-600">
      <span className="inline-flex gap-3 pb-3">
        <img src={img1} alt="img" /> авторизуйтесь
      </span>
      <span className="inline-flex gap-3 pb-3">
        <img src={img2} alt="img" />
        введите номер телефона
      </span>
      <span className="inline-flex gap-3 pb-3">
        <img src={img3} alt="img" />
        начните переписку
      </span>
    </div>
  );
};
