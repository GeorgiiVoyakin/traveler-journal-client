import './SignupPage.css';
import {
  Box,
  Input,
  FormControl,
  FormLabel,
  Center,
  Button,
  Stack,
  Text,
} from '@chakra-ui/react';
import { signup } from '../api/users';
import { useState } from 'react';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [firstPassword, setFirstPassword] = useState('');
  const [secondPassword, setSecondPassword] = useState('');
  const minPasswordLength = 4;

  return (
    <div className='signup-page'>
      <Center h='100%'>
        <Box boxShadow='outline' p='6' rounded='md' bg='white' minWidth={370}>
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
                value={firstPassword}
                onChange={(event) => {
                  setFirstPassword(event.target.value);
                }}
              />
              <FormLabel htmlFor='password-confirm'>Retype password</FormLabel>
              <Input
                id='password-confirm'
                type='password'
                value={secondPassword}
                onChange={(event) => {
                  setSecondPassword(event.target.value);
                }}
              />
            </FormControl>
            {firstPassword === secondPassword ? (
              firstPassword.length < minPasswordLength ? (
                <Text color={'red'}>
                  Пароль не может быть короче {minPasswordLength} символов
                </Text>
              ) : username.length > 0 ? (
                <Button
                  type='submit'
                  colorScheme='green'
                  w='100%'
                  onClick={() => {
                    signup({ username, password: firstPassword })
                      .then(() => {
                        console.log('Ok');
                      })
                      .catch(() => {
                        console.log('Not ok');
                      });
                  }}
                >
                  Sign up
                </Button>
              ) : (
                <Text color={'red'}>Имя пользователя не может быть пустым</Text>
              )
            ) : (
              <Text color={'red'}>Пароли не совпадают</Text>
            )}
          </Stack>
        </Box>
      </Center>
    </div>
  );
}
