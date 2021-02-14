import React from 'react';
import './header.scss';
import { Button, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/icon.png';

export default function Header() {
  return (
    <header className='header'>
      <div className='header__inner'>
        <a className='logo' href='/'>
          <img src={logo} alt='' className='logo__image' />
          <Text>Pool</Text>
        </a>
        <Link to='/create'>
          <Button colorScheme='blue'> Post article</Button>
        </Link>
      </div>
    </header>
  );
}
