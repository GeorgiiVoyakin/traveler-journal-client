import './LoginPage.css';
import {
  Box,
  Input,
  FormControl,
  FormLabel,
  Center,
  Button,
  Stack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { login } from '../api/users';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPasswrod] = useState('');

  return (
    <div className='login-page'>
      <Center h='100%'>
        <Box boxShadow='outline' p='6' rounded='md' bg='white'>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel htmlFor='username'>Username</FormLabel>
              <Input
                id='username'
                type='text'
                value={username}
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
              <FormLabel htmlFor='password'>Password</FormLabel>
              <Input
                id='password'
                type='password'
                value={password}
                onChange={(event) => {
                  setPasswrod(event.target.value);
                }}
              />
            </FormControl>
            <Button
              type='submit'
              colorScheme='green'
              w='100%'
              onClick={() => {
                login({ username, password })
                  .then((response) => {
                    return response.json();
                  })
                  .then((data) => {
                    localStorage.setItem('token', data.token);
                  })
                  .catch((err) => {
                    console.log('Login error: ' + err);
                  });
              }}
            >
              Sign in
            </Button>
          </Stack>
        </Box>
      </Center>
    </div>
  );
}
