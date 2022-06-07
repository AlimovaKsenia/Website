import Head from 'next/head';

import Header from '../../components/Header';
import { INNER_PAGES_CONTENT } from '../../constants';
import ContactUs from '../../components/ContactUs';
import Footer from '../../components/Footer';

export default function Home({
  file,
  title,
  fileLabel,
  description,
  linksWithImages,
  paragraphs,
}) {
  const download = () => {
    const a = document.createElement('a');
    a.style = 'display: none';
    a.href = file;
    a.setAttribute('download', '');
    document.body.appendChild(a);
    a.click();
    a.remove();
  };
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
      <section className='appliances'>
        <div className='container appliance__container'>
          {title && <h2 className='appliances__heading'>{title}</h2>}
          {description && (
            <div className='row minpay'>
              <p className='col-lg-8 diskr'>
                <i>{description}</i>
              </p>
            </div>
          )}

          {linksWithImages && (
            <ul className='row appliances__list'>
              {linksWithImages.map((link) => (
                <li key={link.title} className='col-lg-3 appliances__item'>
                  {link.img && <img src={link.img} />}
                  <a href={link.href} className='appliance__link'>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          )}

          {paragraphs && (
            <div className='row appliances__discripyion'>
              {paragraphs.map((p, i) =>
                p.type === 'li' ? (
                  <li key={i} className='appliance__li'>
                    {p.text}
                  </li>
                ) : (
                  <p key={i} className='appliance__descript'>
                    {p.text}
                  </p>
                )
              )}
            </div>
          )}
          {file && (
            <div className='row appliances__discripyion'>
              <a className='pricelist-download' onClick={download}>
                {fileLabel}
              </a>
            </div>
          )}
        </div>
      </section>
      <ContactUs />
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const page = context?.query.page;
  return {
    props: INNER_PAGES_CONTENT[page],
  };
}
