import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import './header.scss';
import { Button, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/icon.png';
import { Context as AuthContext } from '../../state/AuthContext';

export default function Header() {
  const { logout, state } = useContext(AuthContext);
  const { isAuthenticated } = state;
  const history = useHistory();
  const login = () => {
    history.push('/login');
  };
  return (
    <header className='header'>
      <div className='header__inner'>
        <a className='logo' href='/'>
          <img src={logo} alt='' className='logo__image' />
          <Text>Pool</Text>
        </a>
        {isAuthenticated ? (
          <>
            <Link to='/create-article'>
              <Button colorScheme='blue'> Post article</Button>
            </Link>
            <Text>Welcome, {state.username}!</Text>
            <Link to='/submit-video'>
              <Button colorScheme='blue'> Submit video</Button>
            </Link>
            <Button colorScheme='red' onClick={logout}>
              Log out
            </Button>
          </>
        ) : (
          <Button colorScheme='green' onClick={login}>
            Login
          </Button>
        )}
      </div>
    </header>
  );
}
