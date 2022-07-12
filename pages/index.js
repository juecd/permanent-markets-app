import Head from 'next/head';
import Header from '../components/Header';
import Grid from '../components/Grid';
import styles from '../styles/Home.module.css';

import testData from '../components/sample';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Permanent Markets App</title>
        <meta name="description" content="List of farmers markets near you" />
        <meta name="keywords" content="farmers markets near me, regenerative agriculture" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <Grid 
        marketData={testData}
      />
    </div>
  )
}
