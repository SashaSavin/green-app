import { ReactComponent as Logo } from 'assets/Illustration.svg';
import { LoginForm } from './forms';

export const Login = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center align-top py-10">
      <Logo />
      <LoginForm />
    </div>
  );
};
