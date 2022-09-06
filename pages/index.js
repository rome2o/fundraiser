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
        title="Home: nine4"
        description="Welcome to nine4 homepage."
        canonical="https://nine4-3.vercel.app/"
        openGraph={{
          url: "https://nine4-3.vercel.app/",
        }}
      />
      <Head>
        <title>Fundraiser - Flood Victims in Pakistan</title>
        <link rel="icon" href="/favicon.png" />
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
