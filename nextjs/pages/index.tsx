import Head from 'next/head'
import Header from '../components/Home/Header'
import Main from '../components/Home/Main'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> JuMP CNJ </title>
        <meta name="description" content="teOrienta project" />
        <link rel="icon" href="/icons/favicon.svg" />
      </Head>

      <Header/>
      <Main/>
    </div>
  )
}
