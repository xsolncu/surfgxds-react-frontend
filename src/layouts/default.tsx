import type { FC, PropsWithChildren } from 'react';
import Header from '#/components/header/header';

const DefaultLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

export default DefaultLayout;
