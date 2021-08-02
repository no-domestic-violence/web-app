import React, { useState, useContext } from 'react';
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';
import { Context as AuthContext } from '../../state/AuthContext';
import { captchaSiteKey } from '../../config';
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from 'react-google-recaptcha-v3';

export default function LoginForm() {
  const { login } = useContext(AuthContext);
  const initialState = {
    email: '',
    password: '',
    isSubmitting: false,
    errorMessage: null,
    captchaToken: null,
  };

  const [data, setData] = useState(initialState);

  // remove error?

  const { email, password, captchaToken } = data;

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setData({
      ...data,
      isSubmitting: true,
    });
    login({ email, password, captchaToken });
  };

  const handleVerify = (token) => {
    console.log('Arrives', token);
    setData({
      ...data,
      captchaToken: token,
    });
  };

  return (
    <Flex width='full' align='center' justifyContent='center'>
      <Box
        mt={8}
        p={8}
        maxWidth='700px'
        borderWidth={2}
        borderRadius={8}
        boxShadow='lg'>
        <Box textAlign='center'>
          <Heading>Login</Heading>
        </Box>
        <Box my={4} textAlign='left'>
          <form onSubmit={handleSubmit}>
            <FormControl isRequired>
              <GoogleReCaptchaProvider reCaptchaKey={captchaSiteKey}>
                <GoogleReCaptcha onVerify={handleVerify} />
              </GoogleReCaptchaProvider>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type='email'
                name='email'
                placeholder='test@test.com'
                onChange={handleInputChange}
                value={email}
              />
            </FormControl>
            <FormControl isRequired mt={6}>
              <FormLabel>Password</FormLabel>
              <Input
                type='password'
                name='password'
                placeholder='*******'
                onChange={handleInputChange}
                value={password}
              />
            </FormControl>
            <Button
              disabled={data.isSubmitting}
              colorScheme='blue'
              type='submit'
              variant='outline'
              width='full'
              mt={4}>
              {data.isSubmitting ? 'Loading...' : ' Login'}
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
}
