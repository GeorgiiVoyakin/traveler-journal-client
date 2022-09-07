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
import { useNavigate } from 'react-router-dom';

export default function LoginPage({ token, setToken }) {
  const [username, setUsername] = useState('');
  const [password, setPasswrod] = useState('');
  const navigate = useNavigate();

  if (token) {
    navigate('/notes');
  }

  return (
    <div className='login-page'>
      <Center>
        <Box boxShadow='outline' p='6' rounded='md' bg='white' mt='5%'>
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
                    setToken(data.token);
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
