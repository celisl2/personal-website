
import Head from 'next/head';
import Link from 'next/link'
import Nav from '../components/Nav';
import Image from 'next/image';
import Emoji from '../components/Emoji';

const pdfResume = "https://drive.google.com/file/d/1sGMETgZGaHZK4WPTQbgMLTnT9TUveT9t/view?usp=sharing";

export default function Resume() {
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
                    <h2>Resume</h2>
                    
                    <p><Emoji symbol="💡"/> This resume is in png format. Here{'\''}s a link to a downloadable PDF fromat: <Link href={pdfResume}><a>PDF Version</a></Link></p>
                    <img  className="resume" src={"/images/laura-celis-resume.png"}/>
                </div>
                
				<div className="small-screen-other">
					<Link href="https://github.com/celisl2"><a><img src={"/images/github.png"}/></a></Link>
					<Link href="https://www.linkedin.com/in/celisl2"><a><img src={"/images/linkedin.png"}/></a></Link>
				</div>
			</div>
		</div>
	)
}