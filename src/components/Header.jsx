import { Button, Box, Flex, Spacer, Heading } from '@chakra-ui/react';
import './Header.css';

function Header() {
  return (
    <Box boxShadow='base' bg='white'>
      <div className='header'>
        <Flex minWidth='max-content' alignItems='center' gap='2'>
          <Box p='2'>
            <Heading size='md'>Traveler journal</Heading>
          </Box>
          <Spacer />
          <Button colorScheme='blue'>Sign in</Button>
          <Button colorScheme='blue'>Sign up</Button>
        </Flex>
      </div>
    </Box>
  );
}

export default Header;
