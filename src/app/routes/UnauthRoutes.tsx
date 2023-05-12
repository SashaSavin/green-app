import { Route, Routes, Navigate } from 'react-router-dom'
import { generateRoutePath, RouteName } from '../../app/routes/helpers'
import { unauthenticatedRoutes } from './helpers'
import { Layout } from '../../app/layout/public'

export function UnauthRoutes(): JSX.Element {
  return (
    <Layout>
      <Routes>
        {unauthenticatedRoutes.map(({ label, path, Component }) => (
          <Route key={label} path={path} element={<Component />} />
        ))}
        <Route
          path='*'
          element={
            <Navigate to={generateRoutePath({ name: RouteName.SignIn })} />
          }
        />
      </Routes>
    </Layout>
  )
}
