import './NotesPage.css';
import { VStack, StackDivider } from '@chakra-ui/react';
import NoteCard from '../components/NoteCard';
import AddNoteCard from '../components/AddNoteCard';
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

  useEffect(() => {
    console.log(notes);
  }, [notes]);

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
              title={item.title}
              text={item.content}
              latitude={item.latitude}
              longitude={item.longitude}
              key={item._id}
              id={item._id}
              notes={notes}
              setNotes={setNotes}
            />
          );
        })}
        <AddNoteCard notes={notes} setNotes={setNotes} />
      </VStack>
    </div>
  );
}

export default NotesPage;
