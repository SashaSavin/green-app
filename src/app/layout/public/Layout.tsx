import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { SidebarLayout } from './sidebar-layout';
import { AnimatedLayout } from 'shared/containers/AnimatedLayout';

export interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  const { pathname } = useLocation();

  return (
    <div className={`h-screen w-screen scroll-smooth`}>
      {pathname === '/login' ? (
        <AnimatedLayout>{children}</AnimatedLayout>
      ) : (
        <SidebarLayout>{children}</SidebarLayout>
      )}
    </div>
  );
};
