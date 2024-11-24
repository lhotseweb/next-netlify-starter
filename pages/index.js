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
        <Header title="Coming Soon!" />
        <p className="description">
          Contact: Ryan@thinksyzygy.com
        </p>
      </main>

      <Footer />
    </div>
  )
}
