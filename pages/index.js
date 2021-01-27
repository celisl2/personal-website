import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Laura Celis</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Poppins&family=Raleway:wght@400;700&display=swap" rel="stylesheet"></link>
      </Head>
      <div className="body">
        <Header />
      </div>
      

    </div>
  )
}
