import Head from 'next/head';
import Header from '../components/Header';
import Features from '../components/Features';
import Services from '../components/Services';
import About from '../components/About';
import Team from '../components/Team';
import Numbers from '../components/Numbers';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Сетевая компания</title>
        <link href='/css/bootstrap.min.css' rel='stylesheet' />
        <link href='/css/font-awesome.min.css' rel='stylesheet' />
        <link href='/css/animate.min.css' rel='stylesheet' />
        <link href='/css/owl.carousel.css' rel='stylesheet' />
        <link href='/css/owl.transitions.css' rel='stylesheet' />
        <link href='/css/prettyPhoto.css' rel='stylesheet' />
        <link href='/css/main.css' rel='stylesheet' />
        <link href='/css/styles.css' rel='stylesheet' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <Features />
      <Services />
      <About />
      <Team />
      <Numbers />
      <ContactUs />
      <Footer />
    </>
  );
}
