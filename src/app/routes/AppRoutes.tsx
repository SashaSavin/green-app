import { Layout } from '../../app/layout/public';
import { Navigate, Route, Routes } from 'react-router-dom';
import { UnauthRoutes } from './UnauthRoutes';
import { protectedRoutes } from './helpers';

export const AppRoutes = (): JSX.Element => {
  return (
    <Routes>
      {protectedRoutes.map(({ id, path, Component }) => (
        <Route
          key={id}
          path={path}
          element={
            <Layout>
              <Component />
            </Layout>
          }
        />
      ))}

      <Route path="*" element={<UnauthRoutes />} />
      <Route path="/" element={<Navigate replace to="/login" />} />
    </Routes>
  );
};
