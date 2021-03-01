import React, { useState } from 'react';
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = () => {
    console.log(email);
    console.log(password);
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
          <form>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type='email'
                placeholder='test@test.com'
                onChange={(event) => setEmail(event.currentTarget.value)}
              />
            </FormControl>
            <FormControl isRequired mt={6}>
              <FormLabel>Password</FormLabel>
              <Input
                type='password'
                placeholder='*******'
                onChange={(event) => setPassword(event.currentTarget.value)}
              />
            </FormControl>
            <Button
              colorScheme='blue'
              type='submit'
              variant='outline'
              width='full'
              mt={4}
              onSubmit={handleSubmit}>
              Sign In
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
}
