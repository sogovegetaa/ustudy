import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import 'nprogress/nprogress.css';
import * as React from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
function MyApp({ Component, pageProps }: AppProps) {
 
  React.useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    Router.events.on('routeChangeStart', handleRouteStart);
    Router.events.on('routeChangeComplete', handleRouteDone);
    Router.events.on('routeChangeError', handleRouteDone);

    return () => {
      Router.events.off('routeChangeStart', handleRouteStart);
      Router.events.off('routeChangeComplete', handleRouteDone);
      Router.events.off('routeChangeError', handleRouteDone);
    };
  }, []);
 
  return (
    <div className="bg-[#f8fbfe]">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
