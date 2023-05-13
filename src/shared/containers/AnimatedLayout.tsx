import { animated, useSpring } from '@react-spring/web';
import { ReactNode, useEffect } from 'react';

interface Props {
  children: ReactNode;
}

export const AnimatedLayout = ({ children }: Props) => {
  const styles = useSpring({
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    config: { duration: 500 }
  });

  useEffect(() => {
    styles.opacity.start();
    styles.y.start();
  }, [styles]);

  return <animated.div style={styles}>{children}</animated.div>;
};
