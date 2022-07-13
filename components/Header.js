import Image from 'next/image';
import styles from '../styles/Header.module.css';

import logo from '../public/fellow-farmer.svg';

const Header = () => {
    return (
        <div className={styles.header}>
            {<Image
                src={logo}
                alt="Fellow Farmer logo"
                width='75px'
                height='75px'
            />}
        </div>
    );
}

export default Header;