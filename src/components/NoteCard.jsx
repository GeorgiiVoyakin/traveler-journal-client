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
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { deleteNote } from '../api/notes';

function NoteCard(props) {
  return (
    <div className='note-card'>
      <Box boxShadow='outline' rounded='md' p={6}>
        <Flex>
          <Box w='400px'>
            <Heading size='lg'>
              {props.title ? props.title : "I'm a Heading"}
            </Heading>
            <Text>{props.text}</Text>
          </Box>
          <Spacer />
          <Stack direction='column' spacing={4}>
            <IconButton aria-label='Edit note' size='lg' icon={<EditIcon />} />
            <IconButton
              aria-label='Delete note'
              size='lg'
              icon={<DeleteIcon />}
              onClick={() => {
                deleteNote(props.id);
                props.setNotes(
                  props.notes.filter((item) => item.id !== props.id)
                );
              }}
            />
          </Stack>
          <Spacer />
          <Square p='4' bsize='400px' boxShadow='outline'>
            <YMaps>
              <Map
                defaultState={{
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
