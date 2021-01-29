import Image from 'next/image';
import Link from 'next/link'

const Nav = () => {
    return (
        <div>
            <nav>
                <Link href="/"><a><img src={"/images/home.svg"} className="buttonOverlay"/></a></Link>
                <div className="navWrapper">
                    <a href="#">About</a>
                    <a href="/resume">Resume</a>
                    <a href="/contact" id="special-link">Contact</a>
                </div>
            </nav>
        </div>
        
    );
};

export default Nav;