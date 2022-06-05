import './SignupPage.css';
import {
  Box,
  Input,
  FormControl,
  FormLabel,
  Center,
  Button,
  Stack,
} from '@chakra-ui/react';

export default function LoginPage() {
  return (
    <div className='signup-page'>
      <Center h='100%'>
        <Box boxShadow='outline' p='6' rounded='md' bg='white'>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel htmlFor='username'>Username</FormLabel>
              <Input id='username' type='text' />
              <FormLabel htmlFor='password'>Password</FormLabel>
              <Input id='password' type='password' />
              <FormLabel htmlFor='password-confirm'>Retype password</FormLabel>
              <Input id='password-confirm' type='password' />
            </FormControl>
            <Button type='submit' colorScheme='green' w='100%'>
              Sign up
            </Button>
          </Stack>
        </Box>
      </Center>
    </div>
  );
}
