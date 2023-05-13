import { FindUserForm } from './forms';
import { ReactComponent as Logo } from 'assets/Illustration.svg';

export const FindUser = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center align-top py-10">
      <Logo />
      <FindUserForm />
    </div>
  );
};
