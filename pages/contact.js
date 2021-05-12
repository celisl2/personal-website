
import Head from 'next/head';
import Link from 'next/link'
import Nav from '../components/Nav';
import Emoji from '../components/Emoji';

const email = 'mailto:lauracelis18@gmail.com';
const linkedIn = 'https://www.linkedin.com/in/celisl2';
const twitter = 'https://twitter.com/lc_bleep';

export default function Contact() {
    return (
		<div>
			<Head>
				<title>Laura Celis</title>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.gstatic.com"></link>
				<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Raleway:wght@100;700&display=swap" rel="stylesheet"></link>
			</Head>
			<div className="home">
				<Nav/>
                <div className="flexResume">
                    <h2>Contact</h2>
                    <section>
                        <p><Emoji symbol="🗳️"/> You can reach me at the following:</p>
                    </section>
                    
                    
                    <ul>
                        <li><Link href={email}><a> <Emoji symbol="📧"/> {'lauracelis18@gmail.com'}</a></Link></li>

                        <li><Link href={linkedIn}><a><Emoji symbol="💬"/> Linked In</a></Link></li>

                        <li><Link href={twitter}><a><Emoji symbol="🐦"/> Twitter</a></Link></li>
                    </ul>
                </div>
                
				<div className="small-screen-other">
					<Link href="https://github.com/celisl2"><a><img src={"/images/github.png"}/></a></Link>
					<Link href="https://www.linkedin.com/in/celisl2"><a><img src={"/images/linkedin.png"}/></a></Link>
				</div>
			</div>
		</div>
	)
}