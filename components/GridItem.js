import Image from 'next/image';
import styles from '../styles/GridItem.module.css';
import { Col } from 'react-grid-system';


const GridItem = (props) => {
    const { location = { image } } = props;
    return (
        <Col className={styles.card} style={{ padding: 0 }}>
            <img
                src={'/sampleImg.png'/*image && image.src*/}
                alt={location && location.name}
                className={styles.img}
            />
            <p className={styles.card.h2}>
                {location && location.name}
            </p>
        </Col>
    );
};

export default GridItem;