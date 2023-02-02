import '../styles/globals.css';
import { Ubuntu } from '@next/font/google';

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
      <body className='bg-magnolia md:max-h-[100vh] relative'>
        <main className='md:mx-auto md:mt-32 md:w-[70vw] md:h-[70vh] md:bg-white md:rounded-md'>
          {children}
        </main>
      </body>
    </html>
  );
}
