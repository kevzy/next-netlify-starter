import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Hi Lentineπ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Im Sorry " />
<h3> Lentine </h3>
        <p className="description">
          Im sorry for making you cryπ</p>
       
         <p className="description">
          Ik ik NKT π</p>
          
 
         <p className="description">
          Good 9tππ π</p>

      </main>

      <Footer />
    </div>
  )
}
