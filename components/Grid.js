import styles from '../styles/Grid.module.css';
import { Container, Row } from 'react-grid-system';
import GridItem from './GridItem';

const rowSize = 4; // 4 per row

const gridItemParser = (marketData) => {
    // @TODO would be nice in ES6
    const rows = [];
    for (var i = 0; i < marketData.length; i += rowSize) {
        rows.push(marketData.slice(i, i + rowSize));
    }
    return rows;
}

// {marketData.map((market) => {
//     return (
//         <GridItem
//             location={market.location}
//             producer={market.producer}
//             key={market.location.id}
//             width={rowSize}
//         />
//     );
// })}


const Grid = ({ marketData }) => {
    const rows = gridItemParser(marketData);
    return (
        <Container fluid>
            {rows.map((row) => {
                return (
                    <Row>
                        {row.map((market) => {
                            return (
                                <GridItem
                                    location={market.location}
                                    producer={market.producer}
                                    key={market.location.id}
                                />
                            );
                        })}
                    </Row>
                );
            })}
        </Container>
    );
  }
  
  export default Grid;
  