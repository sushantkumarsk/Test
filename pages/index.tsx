import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>World Knowledge</title>
        <meta name="description" content="Get World Knowledge at One Place" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="oyV_iEPa7HbhmzocBegyZ1DorSZt_rEuRzB-ivXvdbY" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to World Knowledge
        </h1>

        <p className={styles.description}>
          Get started by Following Us.. !!
        </p>

        <div className={styles.grid}>
           <h2>Want to Know More &rarr;</h2>
            <p>Get to Know About Us</p>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://test-seven-vert-30.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by World Knowledge
        </a>
      </footer>
    </div>
  )
}

export default Home
