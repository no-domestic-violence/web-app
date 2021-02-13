import React from 'react';
import './header.scss';


export default function Header() {
  return (
    <header className='header'>
      <div className='header__inner'>
        <a className='logo' href='/'>
          <img src='' alt='' className='logo__image' />
          <div>Domestic Violence App</div>
        </a>
        <div className='header__menu'>Menu</div>
      </div>
    </header>
  );
}
