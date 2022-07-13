import Head from 'next/head';
import Header from '../components/Header';
import Grid from '../components/Grid';
import styles from '../styles/Home.module.css';

const MARKETS_QUERY = `
query {
  markets(limit: 5) {
   location {
      id
      name
      image {
        src
      }
    }
    producer {
      id
      name
    }
  }
}
`;

export async function getStaticProps() {
  // @TODO generalize and migrate to separate file if we re-use this method
  const res = await fetch('https://permanent-gateway.vercel.app/api/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: MARKETS_QUERY }),
  });
  const data = await res.json();

  return {
    props: {
      markets: data?.data?.markets || [],
    },
  }
}

export default function Home({ markets }) {
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
