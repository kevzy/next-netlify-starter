import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Hi Lentine😞</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Im Sorry " />
        <p className="description">
          Im sorry for making you cry💔</p>
       
         <p className="description">
          Ik ik NKT 😊</p>
          
 
         <p className="description">
          Good 9t💖💝 😊</p>

      </main>

      <Footer />
    </div>
  )
}
