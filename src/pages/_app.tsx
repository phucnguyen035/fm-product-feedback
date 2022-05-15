import '../styles/global.css';

import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { ReactElement, ReactNode, useCallback } from 'react';

import { ProtectedPage } from '@/components/ProtectedPage';

type MyNextPage = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
  auth?: boolean;
};

type AppPropsWithLayout = AppProps & {
  Component: MyNextPage;
};

const MyApp = ({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) => {
  const { auth } = Component;

  const renderPage = useCallback(() => {
    const getLayout = Component.getLayout ?? ((page) => page);

    return getLayout(<Component {...pageProps} />);
  }, []);

  return (
    <SessionProvider session={session}>
      {auth ? <ProtectedPage>{renderPage()}</ProtectedPage> : renderPage()}
    </SessionProvider>
  );
};

export default MyApp;
