'use client';
import Head from 'next/head';
import Header from '../components/Header';
import TopSection from '../components/TopSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Text Editor</title>
      </Head>
      <Header />
      <TopSection />
    </>
  );
}
