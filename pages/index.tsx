'use client';
import Head from 'next/head';
import Header from '../components/Header';
import TopSection from '../components/TopSection';
import DocList from '@/components/DocList';
import { useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import Login from '@/components/Login';

export default function Home() {
  const { data: session } = useSession();
  console.log('dd', session);
  if (!session) {
    return <Login />;
  }

  return (
    <>
      <Head>
        <title>Text Editor</title>
      </Head>
      <Header />
      <TopSection />
      <DocList />
    </>
  );
}
