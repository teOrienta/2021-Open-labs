import Head from 'next/head'
import Header from '../components/Home/Header'
import Main from '../components/Home/Main'
import Footer from '../components/Home/Footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> teOrienta </title>
        <meta name="description" content="teOrienta project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}
