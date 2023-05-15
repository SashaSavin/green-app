import { ReactNode } from 'react';
import { Sidebar } from '../sidebar';
import { AnimatedLayout } from 'shared/containers/AnimatedLayout';

export interface Props {
  children: ReactNode;
}

export const SidebarLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-row ">
      <div className="basis-1/3 bg-[#F5FAFC] min-h-screen">
        <Sidebar />
      </div>
      <div className="basis-3/4">
        <AnimatedLayout>{children}</AnimatedLayout>
      </div>
    </div>
  );
};
