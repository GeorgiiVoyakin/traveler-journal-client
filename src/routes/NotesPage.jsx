import './NotesPage.css';
import { Box, Stack, HStack, VStack, StackDivider } from '@chakra-ui/react';

function NotesPage() {
  return (
    <div className='notes-page'>
      <VStack
        divider={<StackDivider borderColor='gray.200' />}
        spacing={4}
        align='stretch'
      >
        <Box h='40px' bg='yellow.200'>
          1
        </Box>
        <Box h='40px' bg='tomato'>
          2
        </Box>
        <Box h='40px' bg='pink.100'>
          3
        </Box>
      </VStack>
    </div>
  );
}

export default NotesPage;
