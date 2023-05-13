import { useForm } from 'react-hook-form';
import { Info } from '../components';

export const FindUserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form className="flex flex-col mt-20 items-center" onSubmit={handleSubmit(onSubmit)}>
      {errors.number && <p className="text-red-500 text-xs ">обязательно для заполнения*</p>}

      <input
        type="text"
        className={`mb-5 w-[300px]
            h-[48px]
            border-solid
            border-[1px]
            border-gray-900
            rounded
            ${errors.id ? 'border-red-500' : ''}
           
            `}
        placeholder=" Найти по номеру"
        {...register('number', { required: true })}
      />

      <button
        type="submit"
        className="bg-[#128C7E]
            hover:bg-[#17a393]
            uppercase w-[300px]
            h-[48px]
            text-white
            py-3
            px-3
            rounded
            shadow-lg">
        НАЧАТЬ ЧАТ
      </button>

      <Info />
    </form>
  );
};
