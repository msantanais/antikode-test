import type { Metadata } from 'next';
import localFont from 'next/font/local';
import classNames from 'classnames';
import { ReduxProvider } from '@/utils/redux/ReduxProvider';
import { apple_garamond, helvetica, helvetica_neue } from '@/app/fonts';
import '@/assets/scss/index.scss';
import '@/assets/scss/utilities/_directive.scss';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Compass | Where Passion, Stories, And Craftmanship Collide',
  description: 'Compass shoes e-commerce',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReduxProvider>
        <body
          className={classNames({
            [`${apple_garamond.variable} ${helvetica_neue.variable} ${helvetica.className}`]:
              true,
          })}
        >
          <Header />
          {children}
          <Footer />
        </body>
      </ReduxProvider>
    </html>
  );
}
