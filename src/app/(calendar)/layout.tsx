import type { Metadata } from 'next';
import '@/assets/scss/index.scss';
import '@/assets/scss/utilities/_directive.scss';
import { ReduxProvider } from '@/utils/redux/ReduxProvider';
import { inter } from '@/app/fonts';

export const metadata: Metadata = {
  title: 'Calendar' ,
  description: 'Personal Calendar web app',
};

export default function CalendarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReduxProvider>
        <body className={inter.className}>
          {children}
        </body>
      </ReduxProvider>
    </html>
  );
}
