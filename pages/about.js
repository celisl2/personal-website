import Head from 'next/head';
import Image from 'next/image';

export default function About() {
	return (
		<div>
			<Head>
				<title>Laura Celis</title>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.gstatic.com"></link>
				<link href="https://fonts.googleapis.com/css2?family=Poppins&family=Raleway:wght@400;700&display=swap" rel="stylesheet"></link>
			</Head>
			<div className="body">
				<div className="intro">
					<div>
						<Image className="headShot" src="/images/headshot.JPG" alt="picture of Laura Celis" width={300} height={300}/>
					</div>
					<div className="blurb">
						<h1>Hi&#44; I&#39;m Laura Celis</h1>
						<p>I am a full stack software developer currently living in Charlotte NC&#46; I love all things related to the web which is why I like to be involved with both&#44; building a UI and setting up the data and logic behind it&#46;</p>
					</div>
				</div>
			</div>
		</div>
		)
	}
	