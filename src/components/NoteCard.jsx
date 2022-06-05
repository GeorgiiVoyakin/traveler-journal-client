import {
  Box,
  Stack,
  Flex,
  Spacer,
  IconButton,
  Text,
  Heading,
  Square,
} from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';

function NoteCard(props) {
  return (
    <div className='note-card'>
      <Box boxShadow='outline' rounded='md' p={6}>
        <Flex>
          <Box p='4' maxW='400px'>
            <Heading size='lg'>I'm a Heading</Heading>
            <Text>{props.text}</Text>
          </Box>
          <Stack direction='column' spacing={4}>
            <IconButton aria-label='Call Segun' size='lg' icon={<EditIcon />} />
            <IconButton
              aria-label='Call Segun'
              size='lg'
              icon={<DeleteIcon />}
            />
          </Stack>
          <Spacer />
          <Square p='4' bg='green.400' size='400px'>
            Map
          </Square>
        </Flex>
      </Box>
    </div>
  );
}

export default NoteCard;
