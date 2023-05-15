import { useForm } from 'react-hook-form';
import { Instruction } from '../components/Instruction';
import { useNavigate } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useState } from 'react';
import { apiTokenInstance, idInstance } from 'shared/services/apiConfigs';
import { useProfileStore } from 'store';

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();
  const updateUserProfile = useProfileStore((state) => state.updateUser);

  const onSubmit = (data: any) => {
    console.log(data);
    updateUserProfile(data);
    navigate('/find');
  };

  const handleFormSubmit = async (data: any) => {
    setIsSubmitting(true);
    await onSubmit(data);
    setIsSubmitting(false);
  };

  const togglePasswordVisibility = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleAutofillClick = () => {
    setValue('id', idInstance);
    setValue('token', apiTokenInstance);
  };

  return (
    <form className="flex flex-col mt-10" onSubmit={handleSubmit(handleFormSubmit)}>
      {errors.id && <p className="text-red-500 text-xs ">ID обязательно для заполнения*</p>}

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

      <div className="relative">
        {errors.token && <p className="text-red-500 text-xs ">TOKEN обязательно для заполнения*</p>}
        <input
          type={showPassword ? 'text' : 'password'}
          className={`mb-10 w-[300px] h-[48px] border-[1px] border-gray-800 rounded ${
            errors.token ? 'border-red-500' : ''
          } `}
          placeholder="TOKEN"
          {...register('token', { required: true })}
        />
        <button
          className="absolute
           mt-6
           right-2
           transform -translate-y-1/2
           cursor-pointer
           "
          onClick={togglePasswordVisibility}>
          {showPassword ? <FiEye /> : <FiEyeOff />}
        </button>
      </div>

      <button
        type="button"
        className="text-sm
          text-green-500
            underline
          hover:text-green-400
            text-right mb-2"
        onClick={() => handleAutofillClick()}>
        автозаполнение
      </button>

      <button
        disabled={isSubmitting}
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

      <div
        className="mb-4
        mt-20
        text-lg
        font-serif
        font-bold
        text-start">
        <input
          className={`mr-2  accent-[#128C7E] `}
          id="remember"
          type="checkbox"
          {...register('remember')}
        />
        <label className="mb-2 mr-3" htmlFor="remember">
          Запомнить меня
        </label>
      </div>
    </form>
  );
};
