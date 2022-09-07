import {
  Box,
  Stack,
  Flex,
  Spacer,
  IconButton,
  Text,
  Heading,
  Square,
  useDisclosure,
} from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { deleteNote } from '../api/notes';
import EditCard from './EditNoteCard';

function NoteCard(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className='note-card'>
      <Box boxShadow='outline' rounded='md' p={6}>
        <Flex gap='7'>
          <Box w='400px'>
            <Heading size='lg'>
              {props.title ? props.title : "I'm a Heading"}
            </Heading>
            <Text>{props.text}</Text>
          </Box>
          <Spacer />
          <Stack direction='column' spacing={4}>
            <IconButton
              aria-label='Edit note'
              size='lg'
              icon={<EditIcon />}
              onClick={onOpen}
            />
            <EditCard
              notes={props.notes}
              setNotes={props.setNotes}
              isOpen={isOpen}
              onClose={onClose}
              heading={props.title}
              text={props.text}
              lat={props.latitude}
              long={props.longitude}
              id={props.id}
            />
            <IconButton
              aria-label='Delete note'
              size='lg'
              icon={<DeleteIcon />}
              onClick={() => {
                deleteNote(props.id).catch((err) => {
                  console.log('Error while deleting note ' + err);
                });
                props.setNotes(
                  props.notes.filter((item) => item._id !== props.id)
                );
              }}
            />
          </Stack>
          <Square p='4' bsize='400px' boxShadow='outline'>
            <YMaps>
              <Map
                defaultState={{
                  center: [props.latitude, props.longitude],
                  zoom: 9,
                }}
                state={{
                  center: [props.latitude, props.longitude],
                  zoom: 9,
                }}
                width={400}
                height={400}
              >
                <Placemark geometry={[props.latitude, props.longitude]} />
              </Map>
            </YMaps>
          </Square>
        </Flex>
      </Box>
    </div>
  );
}

export default NoteCard;
