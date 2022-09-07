import {
  Button,
  Box,
  Flex,
  Spacer,
  Heading,
  HStack,
  Text,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getUsername } from '../api/users';
import './Header.css';

function Header({ token, setToken }) {
  const [username, setUsername] = useState('');

  useEffect(() => {
    getUsername()
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsername(data.username);
      });
  }, [token]);

  return (
    <Box boxShadow='base' bg='white'>
      <div className='header'>
        <Flex minWidth='max-content' alignItems='center' gap='2'>
          <Box p='2'>
            <Heading size='md'>Traveler journal</Heading>
          </Box>
          <Spacer />
          {!token ? (
            <>
              <Link to='/login'>
                <Button colorScheme='blue'>Log in</Button>
              </Link>
              <Link to='/signup'>
                <Button colorScheme='blue'>Sign up</Button>
              </Link>
            </>
          ) : (
            <HStack>
              <Text>{username}</Text>
              <Spacer />
              <Button
                colorScheme='blue'
                onClick={() => {
                  localStorage.removeItem('token');
                  setToken('');
                }}
              >
                Log out
              </Button>
            </HStack>
          )}
        </Flex>
      </div>
    </Box>
  );
}

export default Header;
