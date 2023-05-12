import { Layout } from '../../app/layout/public';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { UnauthRoutes } from './UnauthRoutes';
import { protectedRoutes } from './helpers';
import { useEffect, useState } from 'react';

export const AppRoutes = (): JSX.Element => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState('fadeIn');

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage('fadeOut');
  }, [location, displayLocation]);

  return (
    <Routes location={displayLocation}>
      {protectedRoutes.map(({ id, path, Component }) => (
        <Route
          key={id}
          path={path}
          element={
            <Layout
              transitionStage={transitionStage}
              location={location}
              setTransistionStage={setTransistionStage}
              setDisplayLocation={setDisplayLocation}>
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
