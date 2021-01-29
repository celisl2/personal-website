import Head from 'next/head';
import Typewriter from 'typewriter-effect';
import Nav from '../components/Nav';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Laura Celis</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Poppins&family=Raleway:wght@400;700&display=swap" rel="stylesheet"></link>
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
              })
              .pauseFor(300000)
              .deleteAll()
              .callFunction(() => {
                console.log('All strings were deleted');
              })
          .start();
          }} options={{loop: true, wrapperClassName: "typewriter", cursorClassName: "cursor"}}/>
        </div>
        
        </div>
      </div>
      

    </div>
  )
}
