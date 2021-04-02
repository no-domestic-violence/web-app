import React, { useContext } from 'react';
import './header.scss';
import { Button, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/icon.png';
import { Context as AuthContext } from '../../state/AuthContext';

export default function Header() {
  const { logout, state } = useContext(AuthContext);
  const { isAuthenticated } = state;
  return (
    <header className='header'>
      <div className='header__inner'>
        <a className='logo' href='/'>
          <img src={logo} alt='' className='logo__image' />
          <Text>Pool</Text>
        </a>
        {isAuthenticated && (
          <>
            <Link to='/create-article'>
              <Button colorScheme='blue'> Post article</Button>
            </Link>
            <Link to='/submit-video'>
              <Button colorScheme='blue'> Submit video</Button>
            </Link>
            <Text>Welcome, {state.username}!</Text>
            <Button colorScheme='red' onClick={logout}>
              Log out
            </Button>
          </>
        )}
      </div>
    </header>
  );
}
