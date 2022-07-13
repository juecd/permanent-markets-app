import Image from 'next/image';
import styles from '../styles/GridItem.module.css';
import { Col } from 'react-grid-system';


const GridItem = (props) => {
    const { location, location: { image } } = props;
    return (
        <Col className={styles.card} style={{ padding: 0 }}>
            <div className={styles.imgDiv}>
                <img
                    src={image && image.src || './sampleImg.png'}
                    alt={location && location.name}
                    className={styles.img}
                />
            </div>
            <p className={styles.card.h2}>
                {location && location.name}
            </p>
        </Col>
    );
};

export default GridItem;