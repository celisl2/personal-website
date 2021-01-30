import Head from 'next/head';
import Link from 'next/link'
import Nav from '../components/Nav';
import Emoji from '../components/Emoji';
import Image from 'next/image'

export default function About() {
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
                    <h2>About</h2>
                    <div className="intro">
					<div>
						<Image className="headShot" src="/images/headshot.JPG" alt="picture of Laura Celis" width={300} height={300}/>
					</div>
					<div className="blurb">
						<p>I am a full stack software developer currently living in Charlotte NC&#46; I love all things related to the web which is why I like to be involved with both&#44; building a UI and setting up the data and logic behind it&#46;</p>
						<p>I currently work as a back end software engineer where I primarily use Java, Spring and XML containers. In the past I have worked with Node.js and PHP and I am currently learning Python.</p>
						<p>Outisde of work, I love collecting records, volunteering for LGTBQ+ organizations and eating a lot of ice cream.</p>
					</div>
					</div>
                </div>
				<div className="small-screen-other">
					<Link href="https://github.com/celisl2"><a><img src={"/images/github.png"}/></a></Link>
					<Link href="https://www.linkedin.com/in/celisl2/"><a><img src={"/images/linkedin.png"}/></a></Link>
				</div>
			</div>
		</div>
		)
	}