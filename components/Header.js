import Image from 'next/image';
import fellowFarmerLogo from '../public/fellow-farmer.svg';


const Header = () => {
    return (
        <div>
            <Image
                src={fellowFarmerLogo}
                alt="Fellow Farmer logo"
                width="76px"
            />
        </div>
    );
}

export default Header;