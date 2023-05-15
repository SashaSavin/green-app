import { useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useMutation } from 'react-query';
import { useProfileStore } from 'store';
import { apiTokenInstance, idInstance } from 'shared/services/apiConfigs';
import { Info } from '../components';
import { useNavigate } from 'react-router-dom';

const validationSchema = yup.object().shape({
  number: yup
    .string()
    .required('Введите номер телефона*')
    .matches(/^\+?\d+$/, 'Некорректный номер телефона*')
});

export const FindUserForm = (): JSX.Element => {
  const { addContact } = useProfileStore();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(validationSchema) });

  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (showError) {
      timer = setTimeout(() => {
        setShowError(false);
      }, 3500);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [showError]);

  const { mutateAsync } = useMutation((data: any) =>
    fetch(`https://api.green-api.com/waInstance${idInstance}/CheckWhatsapp/${apiTokenInstance}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => response.json())
  );

  const onSubmit: SubmitHandler<FieldValues> = async (data: any) => {
    try {
      const response = await mutateAsync({ phoneNumber: data.number });

      if (response.existsWhatsapp) {
        addContact(data.number);
        navigate(`/chat/${data.number}`);
      } else {
        setShowError(true);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form className="flex flex-col mt-20 items-center" onSubmit={handleSubmit(onSubmit)}>
      {errors.number && <p className="text-red-500 text-xs">{errors.number.message?.toString()}</p>}

      <input
        type="text"
        className={`mb-5 w-[300px]
            h-[48px]
            border-solid
            border-[1px]
            border-gray-900
            rounded
            ${errors.number ? 'border-red-500' : ''}
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

      {showError && (
        <div className="text-center mt-3 text-red-500">
          <p>Пользователя с данным номером нет в whatsapp!*</p>
        </div>
      )}

      <Info />
    </form>
  );
};
