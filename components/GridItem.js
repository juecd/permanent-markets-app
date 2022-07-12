import Image from 'next/image';

const GridItem = (props) => {
    const { location = { image } } = props;
    return (
        <div>
            <Image
                src={'/fellow-farmer.svg'/*image && image.src*/}
                alt={location && location.name}
                width="55px"
                height="55px"
            />
            {/* Could make extend this to a link if we make individual pages to click through */}
            <h2>
                {location && location.name}
            </h2>
        </div>
    );
};

export default GridItem;