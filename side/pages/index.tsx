import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import dynamic from 'next/dynamic'
const Hi = dynamic(()=> import("main/hi"));
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <Hi/>
      <main className={styles.main}>
        <h1 className={styles.title}>
        Welcome to side port : 3001
        </h1>

      </main>

      <footer className={styles.footer}>
 
      </footer>
    </div>
  )
}