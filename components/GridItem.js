import Image from 'next/image';
import styles from '../styles/GridItem.module.css';
import { Col } from 'react-grid-system';


const GridItem = (props) => {
    const { location = { image } } = props;
    return (
        <Col className={styles.card}>
            <Image
                src={'/fellow-farmer.svg'/*image && image.src*/}
                alt={location && location.name}
                width="55px"
                height="55px"
            />
            <p className={styles.card.h2}>
                {location && location.name}
            </p>
        </Col>
    );
};

export default GridItem;