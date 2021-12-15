import type { NextPage } from 'next'
import Link from 'next/Link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <Link href="/users">
            <div className={styles.card}>
              <h2>Users &rarr;</h2>
              <p>GET fakeAPI from jsonplaceholder. We have 10 users list.</p>
            </div>
          </Link>

          <Link href="/photos" shallow={true}>
            <div className={styles.card}>
              <h2>Photos &rarr;</h2>
              <p>GET fakeAPI from jsonplaceholder. We have 5000 photo list.</p>
            </div>
          </Link>

          {/* <Link href="/users">
            <div className={styles.card}>
              <h2>Users &rarr;</h2>
              <p>GET fakeAPI from jsonplaceholder. We have 10 users list.</p>
            </div>
          </Link>
          
          <Link href="/users">
            <div className={styles.card}>
              <h2>Users &rarr;</h2>
              <p>GET fakeAPI from jsonplaceholder. We have 10 users list.</p>
            </div>
          </Link> */}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
