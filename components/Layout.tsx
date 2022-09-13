import Head from 'next/head';
import { FC, PropsWithChildren } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { Logo } from './Logo';
import { Navbar } from './Navbar';

export const Layout: FC<
  PropsWithChildren<{ title: string; content: string }>
> = ({ children, title, content }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={content} />
      </Head>

      <div>
        <Header>
          <Logo></Logo>
          <Navbar></Navbar>
        </Header>
        <main>{children}</main>
      </div>

      <Footer>
        <Logo></Logo>
      </Footer>
    </>
  );
};
