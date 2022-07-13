import React from 'react';

const MARKETS_QUERY = `
{
  markets(limit: 100, skip: 0) {
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
export const useMarkets = () => {
  const[markets, setMarkets] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://permanent-gateway.vercel.app/api/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: MARKETS_QUERY }),
      });
      const data = await res.json();
      setMarkets(data.data.markets);
    };

    fetchData()
  }, []);
  
  return markets;
};