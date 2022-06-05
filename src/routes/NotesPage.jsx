import './NotesPage.css';
import {
  Box,
  VStack,
  StackDivider,
  Stack,
  Flex,
  Spacer,
  Divider,
  IconButton,
  Text,
  Heading,
  Square,
} from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';

function NotesPage() {
  return (
    <div className='notes-page'>
      <VStack
        divider={<StackDivider borderColor='gray.200' />}
        spacing={4}
        align='stretch'
      >
        <Box boxShadow='outline' rounded='md' p={6}>
          <Flex>
            <Box p='4' maxW='400px'>
              <Heading size='lg'>I'm a Heading</Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                pellentesque quam vitae leo porttitor vehicula. Phasellus
                euismod magna a cursus maximus. Suspendisse potenti. Nam
                vestibulum dui at porttitor viverra. Aenean quis imperdiet
                tortor. Donec aliquet ex mollis ligula dictum, in accumsan purus
                mollis. Fusce ut sollicitudin augue. Aliquam eu ante vehicula,
                congue ligula quis, cursus ex. In id fringilla nibh, quis
                interdum turpis. Sed at nisi et ipsum dapibus malesuada vitae at
                leo.
              </Text>
            </Box>
            <Divider orientation='vertical' />
            <Stack direction='column' spacing={4}>
              <IconButton
                aria-label='Call Segun'
                size='lg'
                icon={<EditIcon />}
              />{' '}
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
        <Box boxShadow='outline' rounded='md' p={6}>
          <Flex>
            <Box p='4' maxW='400px'>
              <Heading size='lg'>I'm a Heading</Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                pellentesque quam vitae leo porttitor vehicula. Phasellus
                euismod magna a cursus maximus. Suspendisse potenti. Nam
                vestibulum dui at porttitor viverra. Aenean quis imperdiet
                tortor. Donec aliquet ex mollis ligula dictum, in accumsan purus
                mollis. Fusce ut sollicitudin augue. Aliquam eu ante vehicula,
                congue ligula quis, cursus ex. In id fringilla nibh, quis
                interdum turpis. Sed at nisi et ipsum dapibus malesuada vitae at
                leo.
              </Text>
            </Box>
            <Divider orientation='vertical' />
            <Stack direction='column' spacing={4}>
              <IconButton
                aria-label='Call Segun'
                size='lg'
                icon={<EditIcon />}
              />{' '}
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
        <Box boxShadow='outline' rounded='md' p={6}>
          <Flex>
            <Box p='4' maxW='400px'>
              <Heading size='lg'>I'm a Heading</Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                pellentesque quam vitae leo porttitor vehicula. Phasellus
                euismod magna a cursus maximus. Suspendisse potenti. Nam
                vestibulum dui at porttitor viverra. Aenean quis imperdiet
                tortor. Donec aliquet ex mollis ligula dictum, in accumsan purus
                mollis. Fusce ut sollicitudin augue. Aliquam eu ante vehicula,
                congue ligula quis, cursus ex. In id fringilla nibh, quis
                interdum turpis. Sed at nisi et ipsum dapibus malesuada vitae at
                leo.
              </Text>
            </Box>
            <Divider orientation='vertical' />
            <Stack direction='column' spacing={4}>
              <IconButton
                aria-label='Call Segun'
                size='lg'
                icon={<EditIcon />}
              />{' '}
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
      </VStack>
    </div>
  );
}

export default NotesPage;
