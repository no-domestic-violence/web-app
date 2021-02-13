import React from 'react';
import './header.scss';
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/icon.png';
export default function Header() {
  return (
    <header className='header'>
      <div className='header__inner'>
        <a className='logo' href='/'>
          <img src={logo} alt='' className='logo__image' />
          <div>Pool</div>
        </a>
        <Button colorScheme='blue'>
          {' '}
          <Link to='/create'>Post article</Link>
        </Button>
      </div>
    </header>
  );
}
