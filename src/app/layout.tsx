// Layout

// To use Chakra UI in server components, convert into client-side component
'use client';

// Use the Providers component in layouts
import { Providers } from './providers';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
};