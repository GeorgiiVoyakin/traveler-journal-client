import { Button, Center, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function MainPage() {
  return (
    <Center pt={5}>
      <VStack>
        <Text>
          Welcome! Here you can write down your notes about different places.
        </Text>
        <Link to='/notes'>
          <Button colorScheme='blue'>Go to notes</Button>
        </Link>
      </VStack>
    </Center>
  );
}
