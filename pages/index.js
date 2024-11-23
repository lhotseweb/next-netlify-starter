import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Syzygy Design</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome!" />
        <img src="/Syzygy Logo Side Txt 11-5-24.svg" alt="Syzygy Logo" className={styles.logo} />
        <p className="description">
          Coming Soon!
        </p>
      </main>

      <Footer />
    </div>
  )
}
