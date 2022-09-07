import './NotesPage.css';
import {
  Alert,
  AlertIcon,
  VStack,
  StackDivider,
  CloseButton,
  useDisclosure,
  Spacer,
} from '@chakra-ui/react';
import NoteCard from '../components/NoteCard';
import AddNoteCard from '../components/AddNoteCard';
import { useEffect } from 'react';
import { getAllNotesForCurrentUser } from '../api/notes';
import { useState } from 'react';

function NotesPage() {
  const [notes, setNotes] = useState([]);
  const {
    isOpen: warning,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: false });

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
        {warning && (
          <Alert status='warning'>
            <AlertIcon />
            Заметка с такими координатами уже существует
            <Spacer />
            <CloseButton
              alignSelf='flex-start'
              position='relative'
              right={-1}
              top={-1}
              onClick={onClose}
            />
          </Alert>
        )}
        <AddNoteCard notes={notes} setNotes={setNotes} warningOnOpen={onOpen} />
      </VStack>
    </div>
  );
}

export default NotesPage;
