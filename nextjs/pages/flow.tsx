import Head from 'next/head'
import styles from '../styles/Flow.module.css'

import Header from '../components/Flow/Header'
import Aside from '../components/Flow/Aside'
import Dashboard from '../components/Flow/Dashboard'

export default function Flow() {
  return (
    <div className={styles.container}>
      <Head> <title> teOrienta | Fluxo </title> </Head>
      <Aside/>
      <div className = {styles.main}>
        <Header/>
        <Dashboard/>
      </div>
    </div>
  )
}
