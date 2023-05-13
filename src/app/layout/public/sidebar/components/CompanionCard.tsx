import img from 'assets/companion.png';

interface Props {
  id: number;
  name: string;
  message: string;
  isActive: number | null;
  handleClick: (id: number) => void;
}

export const CompanionCard = ({ id, name, message, isActive, handleClick }: Props) => {
  const activeStyle = 'rounded-xl shadow-lg bg-[#c2d2d2]';
  return (
    <div
      onClick={() => handleClick(id)}
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
        <img className="h-12 w-12" src={img} />
      </div>
      <div>
        <div className="text-xl font-medium text-black">{name}</div>
        <p className="text-slate-500">{message}</p>
      </div>
    </div>
  );
};
