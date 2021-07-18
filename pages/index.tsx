import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ro Ngoc Vo</title>
        <meta name="description" content="Ro Ngoc Vo's Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to rnvo blog
        </h1>
      </main>

      <footer className={styles.footer}>
          Powered by{' '} Vercel
      </footer>
    </div>
  );
}
