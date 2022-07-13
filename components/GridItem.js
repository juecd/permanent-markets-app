import Image from 'next/image';
import styles from '../styles/GridItem.module.css';
import { Col } from 'react-grid-system';

import sampleImg from '../public/sampleImg.png';

const GridItem = (props) => {
    const { location, location: { image } } = props;
    return (
        <Col className={styles.card} style={{ padding: 0 }}>
            <div className={styles.imgDiv}>
                <Image 
                    src={image && image.src || sampleImg}
                    alt={location && location.name || ''}
                    layout='fill'
                />
            </div>
            <p className={styles.card.h2}>
                {location && location.name}
            </p>
        </Col>
    );
};

export default GridItem;