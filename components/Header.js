import Link from 'next/link';
import { HEADER_TEXT } from '../constants';

export default function Header() {
  return (
    <header id='header'>
      <div className='container header__container'>
        <nav
          id='main-menu'
          className='navbar navbar-default navbar-fixed-top'
          role='banner'
        >
          <div className='navbar-header'>
            <button
              type='button'
              className='navbar-toggle'
              data-toggle='collapse'
              data-target='.navbar-collapse'
            >
              <span className='sr-only'>Toggle navigation</span>
              <span className='icon-bar' />
              <span className='icon-bar' />
              <span className='icon-bar' />
            </button>
            <div className='header__logo'>
              <Link href='/'>
                <a className='navbar-brand'>
                  <img src={HEADER_TEXT.headerImage} alt='logo' />
                </a>
              </Link>
              <p className='header__span'>{HEADER_TEXT.title}</p>
            </div>
          </div>

          <div className='collapse navbar-collapse navbar-right'>
            <ul className='nav navbar-nav'>
              {HEADER_TEXT.navItems.map(({ href, title }) => (
                <li key={href} className='scroll'>
                  <Link href={href}>
                    <a className='nav__link'>{title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
