import { useEffect, useRef } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/global.css';

function usePrevious(value) {
  let ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
export default function MyApp({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router.pathname);

  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <div className='fixed inset-0 flex justify-center sm:px-8'>
        <div className='flex w-full max-w-7xl lg:px-8'>
          <div className='w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20' />
        </div>
      </div>
      <div className='relative'>
        <Header />
        <main>
          <Component previousPathname={previousPathname} {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}
