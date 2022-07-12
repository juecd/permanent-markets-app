import Image from 'next/image';
import fellowFarmerLogo from '../public/fellow-farmer.svg';
import styles from '../styles/Header.module.css';

{/* <Image
                src={fellowFarmerLogo}
                alt="Fellow Farmer logo"
                width="76px"
            /> */}

const Header = () => {
    return (
        <div className={styles.header}>
            Fellow Farmer
        </div>
    );
}

export default Header;