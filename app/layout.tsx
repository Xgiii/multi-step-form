'use client';

import '../styles/globals.css';
import { Ubuntu } from '@next/font/google';
import MainHeader from '../components/MainHeader';

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={ubuntu.className}>
      <head></head>
      <body className='bg-magnolia md:max-h-[100vh]'>
        <main className='md:bg-white md:rounded-md md:flex md:mx-auto md:mt-32 md:w-[95vw] lg:w-[80vw] lg:h-[70vh] md:p-4 max-w-[1024px]'>
          <MainHeader />
          <main className='absolute left-[50%] top-[55%] translate-x-[-50%] translate-y-[-50%] w-[90vw] h-auto rounded-md bg-white shadow-lg md:hidden'>
            <div className='md:hidden'>{children}</div>
          </main>
          <div className='hidden md:block ml-4'>{children}</div>
        </main>
      </body>
    </html>
  );
}
