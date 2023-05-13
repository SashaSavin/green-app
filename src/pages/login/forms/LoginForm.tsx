import { useForm } from 'react-hook-form';
import { Instruction } from '../components/Instruction';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    console.log(data);
    navigate('/find');
  };

  return (
    <form className="flex flex-col mt-10" onSubmit={handleSubmit(onSubmit)}>
      {errors.id && <p className="text-red-500 text-xs ">ID обязательно для заполнения.</p>}

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
        placeholder=" ID"
        {...register('id', { required: true })}
      />

      {errors.token && <p className="text-red-500 text-xs ">TOKEN обязательно для заполнения.</p>}

      <input
        type="text"
        className={`mb-10
            w-[300px]
            h-[48px]
            border-[1px]
            border-gray-800
            rounded
            ${errors.token ? 'border-red-500' : ''} `}
        placeholder={' TOKEN'}
        {...register('token', { required: true })}
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
        войти
      </button>

      <Instruction />

      <div className="mb-4 mt-5 text-lg font-serif font-bold text-start">
        <input
          className={`mr-2  accent-[#128C7E] `}
          id="remember"
          type="checkbox"
          {...register('remember')}
        />
        <label className=" mb-2 mr-3" htmlFor="remember">
          Запомнить меня
        </label>
      </div>
    </form>
  );
};
