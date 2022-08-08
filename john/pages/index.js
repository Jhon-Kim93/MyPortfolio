import Head from 'next/head'
import HomeAnimation from '../components/home/home_animation'
import HomeIntroduce from '../components/home/home_introduce'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Welcome to John's portfolio!</title>
        <meta name="description" content="Introducing myself and projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex min-h-screen flex-col justify-start text-gray-600 body-font">
        <div className="container mx-auto flex px-10 py-5 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <HomeIntroduce/>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <HomeAnimation/>
          </div>  
        </div>
      </section>
    </Layout>
  )
}
