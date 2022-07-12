import GridItem from './GridItem';

const Grid = ({ marketData }) => {
    return marketData.map((props) => {
        return (
            <GridItem 
                location={props.location}
                producer={props.producer}
            />
        );
    });

  }
  
  export default Grid;
  