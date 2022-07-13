import Head from 'next/head';
import Header from '../components/Header';
import Grid from '../components/Grid';
import styles from '../styles/Home.module.css';

import { useMarkets } from '../helpers/fetch.js';

export default function Home() {
  const markets = useMarkets();

  return (
    <div className={styles.main}>
      <Head>
        <title>Permanent Markets App</title>
        <meta name="description" content="List of farmers markets near you" />
        <meta name="keywords" content="farmers markets near me, regenerative agriculture" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <Grid 
        marketData={markets}
      />
    </div>
  )
}
