import { Container } from 'react-grid-system';
import GridRow from './GridRow';

const rowSize = 4;

const gridItemParser = (marketData) => {
    // @TODO would be nice in ES6
    const rows = [];
    for (var i = 0; i < marketData.length; i += rowSize) {
        rows.push(marketData.slice(i, i + rowSize));
    }
    return rows;
}


const Grid = ({ marketData }) => {
    const rows = gridItemParser(marketData);
    return (
        <Container fluid>
            {rows?.map((row, i) => {
                return <GridRow
                    row={row}
                    key={i}
                />
            })}
        </Container>
    );
  }
  
  export default Grid;
  