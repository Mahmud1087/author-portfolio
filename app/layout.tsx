import './globals.css';
import {
  Josefin_Sans,
  Dancing_Script,
  Berkshire_Swash,
  Lobster_Two,
} from 'next/font/google';

const josefin_sans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body-josefin',
});

const dancing_script = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-signature',
});

const berkshire_swash = Berkshire_Swash({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-heading-berkshire',
});

const lobster_two = Lobster_Two({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-heading-lobster',
});

export const metadata = {
  title: 'Rafiat Abdulazeez | Author & Coach',
  description: 'Author, Nonfiction Book Coach, Personal Development Mentor',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={`${lobster_two.variable} ${josefin_sans.variable} ${berkshire_swash.variable} ${dancing_script.variable}`}
    >
      <body className='bg-white text-gray-800 font-body'>{children}</body>
    </html>
  );
}
