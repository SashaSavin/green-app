import { ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
  transitionStage?: string;
  location?: any;
  setTransistionStage: React.Dispatch<React.SetStateAction<string>>;
  setDisplayLocation: any;
}

export const Layout = ({
  children,
  transitionStage,
  location,
  setDisplayLocation,
  setTransistionStage
}: LayoutProps): JSX.Element => {
  return (
    <div className={`h-screen w-screen scroll-smooth `}>
      <div
        className={`${transitionStage}`}
        onAnimationEnd={() => {
          if (transitionStage === 'fadeOut') {
            setTransistionStage('fadeIn');
            setDisplayLocation(location);
          }
        }}>
        fsd
        {children}
      </div>
    </div>
  );
};
