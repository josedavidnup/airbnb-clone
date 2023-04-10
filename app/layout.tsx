import { Nunito } from 'next/font/google';
import './globals.css';
import NavBar from './components/navbar/NavBar';

export const metadata = {
  title: 'Airbnb Clone by Jose David Nuñez',
  description: 'Airbnb Clone by Jose David Nuñez',
};

const font = Nunito({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
