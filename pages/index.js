import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Syzygy Design",
    "founder": {
      "@type": "Person",
      "name": "Ryan Stevenson",
      "jobTitle": "Product Design Engineer",
      "affiliation": "Apple Vision Products Group"
    },
    "description": "Mechanical architecture and product design engineering consultancy led by Ryan Stevenson.",
    "email": "Ryan@thinksyzygy.com",
    "url": "https://thinksyzygy.com"
  };

  return (
    <div className="container">
      <Head>
        <title>Syzygy Design | Mechanical Architecture by Ryan Stevenson</title>
        <meta name="description" content="Product design consultancy led by former Apple Engineer Ryan Stevenson. Specializing in NX, DFM, and complex mechanical architecture." />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <main>
        <Header title="Syzygy Design" />
        <p className="description">
          <strong>Mechanical Architecture & Product Design</strong><br />
          Independent consultancy led by <strong>Ryan Stevenson</strong>.<br />
          Built on the rigor of the Apple Vision Products Group.<br /><br />
          Specializing in NX-native design, DFM, and NPI execution.<br /><br />
          Contact: <a href="mailto:Ryan@thinksyzygy.com">Ryan@thinksyzygy.com</a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
