import './NotesPage.css';
import { VStack, StackDivider, IconButton } from '@chakra-ui/react';
import NoteCard from '../components/NoteCard';
import { AddIcon } from '@chakra-ui/icons';
import { useEffect } from 'react';
import { getAllNotesForCurrentUser } from '../api/notes';
import { useState } from 'react';

function NotesPage() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getAllNotesForCurrentUser()
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setNotes(data);
      })
      .catch((err) => {
        console.log('Error while fetching notes: ' + err);
      });
  }, []);

  return (
    <div className='notes-page'>
      <VStack
        divider={<StackDivider borderColor='gray.200' />}
        spacing={4}
        align='stretch'
      >
        {notes.map((item) => {
          return (
            <NoteCard
              text={item.content}
              latitude={item.latitude}
              longitude={item.longitude}
              key={item._id}
            />
          );
        })}
        <IconButton aria-label='Add note' icon={<AddIcon />} />
      </VStack>
    </div>
  );
}

export default NotesPage;
