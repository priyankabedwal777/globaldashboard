import RootLayout from '../components/rootlayout'; 
import Head from 'next/head';
import "../styles/globals.css"; 

function MyApp({ Component, pageProps }) {
  return (

    <RootLayout>
      <Head>
        <title>E-Talks | Video Calling</title>
        <meta name="description" content="EasyCampus ranked as #1 automated campus recruitment and online campus placement software, reduce your time of hiring, increase the quality of hiring and lower the cost of hiring." />
      </Head>
    {/* <Nav/> */}
 {/* <div ref={cursorRef} className={`custom-cursor ${hovered ? 'hovered' : ''}`}></div> */}
 
      <Component {...pageProps} />
    {/* <Footer/> */}
    </RootLayout>

  );
}

export default MyApp;
