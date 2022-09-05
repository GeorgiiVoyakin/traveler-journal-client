import { Button, Box, Flex, Spacer, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ token, setToken }) {
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
            <Button
              colorScheme='blue'
              onClick={() => {
                localStorage.removeItem('token');
                setToken('');
              }}
            >
              Log out
            </Button>
          )}
        </Flex>
      </div>
    </Box>
  );
}

export default Header;
