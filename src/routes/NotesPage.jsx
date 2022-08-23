import './NotesPage.css';
import { VStack, StackDivider, IconButton } from '@chakra-ui/react';
import NoteCard from '../components/NoteCard';
import { AddIcon } from '@chakra-ui/icons';

function NotesPage() {
  const text = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque quam vitae leo porttitor vehicula. Phasellus euismod magna a cursus maximus. Suspendisse potenti. Nam vestibulum dui at porttitor viverra. Aenean quis imperdiet tortor. Donec aliquet ex mollis ligula dictum, in accumsan purus mollis. Fusce ut sollicitudin augue. Aliquam eu ante vehicula, congue ligula quis, cursus ex. In id fringilla nibh, quis interdum turpis. Sed at nisi et ipsum dapibus malesuada vitae at leo.',
  ];
  return (
    <div className='notes-page'>
      <VStack
        divider={<StackDivider borderColor='gray.200' />}
        spacing={4}
        align='stretch'
      >
        {text.map((item) => {
          return <NoteCard text={item} />;
        })}
        <IconButton aria-label='Add note' icon={<AddIcon />} />
      </VStack>
    </div>
  );
}

export default NotesPage;
