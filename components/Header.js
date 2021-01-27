import Image from 'next/image';

const Header = () => {
    return (
        <div className="intro">
            <div>
                <Image className="headShot" src="/../public/images/headshot.JPG" alt="picture of Laura Celis" width={300}
        height={300}/>
            </div>
            <div className="blurb">
                <h1>Hi&#44; I&#39;m Laura Celis</h1>
                <p>I am a full stack software developer currently living in Charlotte NC&#46; I love all things related to the web which is why I like to be involved with both&#44; building a UI and setting up the data and logic behind it&#46;</p>
            </div>
        </div>
    );
};

export default Header;