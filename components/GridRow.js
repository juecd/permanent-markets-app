import GridItem from './GridItem';
import { Row } from 'react-grid-system';


const GridRow = (props) => {
    const { row } = props;
    return (
        <Row style={{ gap: 7 }}>
            {row?.map((market) => {
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
};

export default GridRow;