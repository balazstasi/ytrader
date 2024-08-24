'use client';
import Head from 'next/head';
import '@/lib/env';

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <section className='bg-white'>
        <div className='container'>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-4xl font-bold'>YTrader</h1>
            <p className='text-lg'>Trade your cards the right way!</p>
          </div>
        </div>
      </section>
    </main>
  );
}
