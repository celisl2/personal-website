import Link from 'next/link'

const Nav = () => {
    return (
        <div className="flexWrapper">
            <nav>
                <Link href="/"><a><img src={"/images/home.svg"} className="buttonOverlay"/></a></Link>
                <div className="navWrapper">
                    <a href="/about">About</a>
                    <a href="/resume">Resume</a>
                    <a href="/contact" id="special-link">Contact</a>
                </div>
                
            </nav>
            <div className="contact-icons">
                    <Link href="https://github.com/celisl2"><a><img src={"/images/github.png"}/></a></Link>
                    <Link href="https://www.linkedin.com/in/celisl2/"><a><img src={"/images/linkedin.png"}/></a></Link>
                </div>
        </div>
        
    );
};

export default Nav;