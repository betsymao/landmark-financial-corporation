// To use Chakra UI in server components, convert into client-side component
'use client';

import Hero from './components/Hero';

export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
