import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const apple_garamond = localFont({
  variable: '--apple-garamond',
  src: [
    {
      path: '../assets/fonts/AppleGaramond.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/AppleGaramond-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/AppleGaramond-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../assets/fonts/AppleGaramond-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
  ],
});

export const helvetica = localFont({
  src: [
    {
      path: '../assets/fonts/Helvetica-Light.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Helvetica-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
})
export const helvetica_neue = localFont({
  variable: '--helvetica-neue',
  src: [
    {
      path: '../assets/fonts/HelveticaNeue-Light.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/HelveticaNeue-Bold.otf',
      weight: '700',
      style: 'bold',
    },
  ],
})

