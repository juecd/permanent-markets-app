import styles from '../styles/Header.module.css';



const Header = () => {
    return (
        <div className={styles.header}>
            {<img
                src={'./fellow-farmer.svg'}
                alt="Fellow Farmer logo"
                className={styles.img}
            />}
        </div>
    );
}

export default Header;