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
      <body className='bg-magnolia'>{children}</body>
    </html>
  );
}
