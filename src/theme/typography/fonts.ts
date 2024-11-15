import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const ppMori = localFont({
  src: [
    {
      path: '../../../public/fonts/pp-mori/PPMori-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/pp-mori/PPMori-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
  ],
});
