import React from 'react';
import Header from '../../components/Header';
import ForStudents from '../../components/ForStudents';
import Head from 'next/head';

function education() {
  return (
    <div>
      <Head>
        <title>Тесты в образовании</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ForStudents />
    </div>
  );
}

export default education;
