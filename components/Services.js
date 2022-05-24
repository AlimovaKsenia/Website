import Link from 'next/link';
import { SERVICES_TEXT } from '../constants';

export default function Services() {
  return (
    <section id='services' className='services'>
      <div className='container'>
        <h2 className='section-title text-center wow fadeInDown'>
          {SERVICES_TEXT.title}
        </h2>
        <ul className='services__list row'>
          {SERVICES_TEXT.links.map((link) => (
            <li
              key={link.link}
              className='col-lg-12 col-md-12 col-sm-12 col-12 services__list-item'
            >
              <img src={link.img} className='services__pic' alt='' />
              <Link href={link.link}>
                <a className='service__link'>{link.label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
