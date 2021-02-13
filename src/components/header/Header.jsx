import React from 'react';
import './header.scss';
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <header className='header'>
      <div className='header__inner'>
        <a className='logo' href='/'>
          <img src='' alt='' className='logo__image' />
          <div>Domestic Violence App</div>
        </a>
        <Button colorScheme='blue'>
          {' '}
          <Link to='/create'>Post article</Link>
        </Button>
      </div>
    </header>
  );
}
