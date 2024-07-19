import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import QueryProvider from '@/components/QueryProvider';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Hire me!',
    default: 'Loading...',
  },
  description: '설문조사를 통해 지원자에대해 알아보세요!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={openSans.className}>
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
