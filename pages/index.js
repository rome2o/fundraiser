import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";
import Features from "../components/Features";
import Volunteers from "../components/Volunteers";
import LogoCloud from "../components/LogoCloud";

export default function Home() {
  return (
    <div>
      <NextSeo
        title="Fundraiser - Support flood victims in Pakistan"
        description="Join our hands at the moment of need to help
        flood affectees in Pakistan. 100% of profit goes to donation."
        
        canonical="https://fundraiser-vert.vercel.app/"
        openGraph={{
          url: "https://fundraiser-vert.vercel.app/",
          images: [
            {
              url: 'images/favicon.png',
              alt: 'Fundraiser - Support flood victims in Pakistan'
            }
          ]
        }}
      />
      <Head>
        <title>Fundraiser - Flood Victims in Pakistan</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="theme-color" content="#125400" />
      </Head>
      <Header />
      <Main />
      <Features />
      <LogoCloud />
      <Volunteers />
      <Footer />
    </div>
  );
}
