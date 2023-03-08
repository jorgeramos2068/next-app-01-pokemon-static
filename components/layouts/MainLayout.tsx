import { FC, ReactNode } from 'react';
import Head from 'next/head';
import { Navbar } from '../ui';

interface Props {
  children: ReactNode;
  title?: string;
}

export const MainLayout: FC<Props> = ({ children, title = 'Pokemon App' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Jorge Ramos" />
        <meta name="description" content="Pokemon information: Something" />
        <meta name="keywords" content="pokemon, pokedex" />
      </Head>
      <Navbar />
      <main style={{ padding: '0 20px' }}>{children}</main>
    </>
  );
};

export default MainLayout;
