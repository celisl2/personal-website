import Head from 'next/head';
import Typewriter from 'typewriter-effect';
import Nav from '../components/Nav';
import Link from 'next/link'
import Emoji from "../components/Emoji";
import {useState} from 'react';

let currentPosition = 'Backend Software Engineer';
let currentLocation = 'Charlotte, NC';


let Intro = props => {
  const [details, setDetails] = useState(false);
  if(!props.show)
    return null;
  else {
    return(
      <div className="window2">
        
        <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString('> I\'m a Full Stack Software Engineer ')
          .callFunction(() => {
            setDetails(true);
          })
            .pauseFor(1200)
        .start();
        }} options={{wrapperClassName: "typewriter-small", cursorClassName: "cursor-small"}}/>
        <div className="info">
          {details ? 
          <>
            <p><Emoji symbol="👩‍💻"/> Currently working as{': ' + currentPosition}</p>
            <p><Emoji symbol="📍"/> Located in{': ' + currentLocation}</p>
          </>
          : null}
        </div>

      </div>
    )
  }
};

export default function Home() {
  const [displayIntro, setDisplayIntro] = useState(false);

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
        <div className="window">
          <div className="parent">
            <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('Hi, I\'m Laura Celis ')
                .callFunction(() => {
                  console.log('Oh hi again. This is me logging and checking the typewritting effect works.');
                  setDisplayIntro(true);
                })
            .start();
            }} options={{wrapperClassName: "typewriter", cursorClassName: "cursor"}}/>
          </div>
        </div>
            <>
            <Intro show={displayIntro}/>
            </>
        
        <div className="small-screen special-small">
          <Link href="https://github.com/celisl2"><a><img src={"/images/github.png"}/></a></Link>
          <Link href="https://www.linkedin.com/in/celisl2/"><a><img src={"/images/linkedin.png"}/></a></Link>
        </div>

        <div className="custom-shape-divider-bottom-1611938878">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
          </svg>
        </div>

      </div>
      

    </div>
  )
}
