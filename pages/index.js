import Head from "next/head";
import Image from "next/image";
import logo from "../public/Logo.svg";
import Link from "next/link";
import logoeler from "../public/ellnew6 1.png"
import Hero from "../components/hero";
import About from "../components/About";
import Contact from "../components/contact";
import Footer from "../components/footer";
import sample from "../public/Waves7.mp4"
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <video className='videoTag' autoPlay loop muted>
            <source src={sample} type='video/mp4' />
        </video>
      <Hero/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  );
}
