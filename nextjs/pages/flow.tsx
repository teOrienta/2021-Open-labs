import Head from 'next/head'
import styles from '../styles/Flow.module.css'

import Header from '../components/Flow/Header'
import Main from '../components/Home/Main'
import Footer from '../components/Home/Footer'

export default function Flow() {
  return (
    <div className={styles.container}>
      <Head> <title> teOrienta | Fluxo </title> </Head>
      <Header/>
    </div>
  )
}
