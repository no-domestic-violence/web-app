import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider as AuthProvider } from './state/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </AuthProvider>
  </React.StrictMode>,
  // eslint-disable-next-line
  document.getElementById('root')
);
