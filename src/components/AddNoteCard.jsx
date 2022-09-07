import { AddIcon } from '@chakra-ui/icons';
import {
  IconButton,
  Box,
  Center,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormLabel,
  Button,
  Stack,
  Input,
  Textarea,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import { useState } from 'react';
import { postNote } from '../api/notes';

function AddCard({ notes, setNotes, warningOnOpen }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  function clearInputs() {
    setTitle('');
    setContent('');
    setLatitude(0);
    setLongitude(0);
  }

  return (
    <Box>
      <Center w='100%' h='100%'>
        <IconButton aria-label='Add note' icon={<AddIcon />} onClick={onOpen} />

        <Modal
          isOpen={isOpen}
          onClose={() => {
            onClose();
            clearInputs();
          }}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add note</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <form>
                <Stack>
                  <FormLabel htmlFor='note-title'>Note title</FormLabel>
                  <Input
                    id='note-title'
                    placeholder="I'm a Heading"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />

                  <FormLabel htmlFor='note-content'>Note content</FormLabel>
                  <Textarea
                    placeholder='Here is a sample placeholder'
                    onChange={(e) => setContent(e.target.value)}
                  />

                  <Stack direction='row'>
                    <FormLabel htmlFor='latitude'>Latitude</FormLabel>
                    <NumberInput
                      step={1}
                      defaultValue={0}
                      min={-90}
                      max={90}
                      maxW='100px'
                      onChange={(value) => setLatitude(value)}
                    >
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>

                    <FormLabel htmlFor='longitude'>Longitude</FormLabel>
                    <NumberInput
                      step={1}
                      defaultValue={0}
                      min={-180}
                      max={180}
                      maxW='100px'
                      onChange={(value) => setLongitude(value)}
                    >
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                  </Stack>
                </Stack>
              </form>
            </ModalBody>

            <ModalFooter>
              {title && content ? (
                <Button
                  colorScheme='green'
                  mr={3}
                  type='submit'
                  onClick={() => {
                    postNote({ title, content, latitude, longitude })
                      .then((response) => {
                        if (response.status === 409) {
                          throw new Error('Duplicate note');
                        }
                        return response.json();
                      })
                      .then((data) => {
                        setNotes([
                          ...notes,
                          { title, content, latitude, longitude, _id: data.id },
                        ]);
                      })
                      .catch((e) => {
                        warningOnOpen();
                      });
                    onClose();
                    clearInputs();
                  }}
                >
                  Submit
                </Button>
              ) : (
                <></>
              )}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Center>
    </Box>
  );
}

export default AddCard;
