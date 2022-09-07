import {
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
import { updateNote } from '../api/notes';

function EditCard({
  notes,
  setNotes,
  isOpen,
  onClose,
  heading,
  text,
  lat,
  long,
  id,
}) {
  const [title, setTitle] = useState(heading);
  const [content, setContent] = useState(text);
  const [latitude, setLatitude] = useState(lat);
  const [longitude, setLongitude] = useState(long);

  function clearInputs() {
    setTitle(heading);
    setContent(text);
    setLatitude(lat);
    setLongitude(long);
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        onClose();
        clearInputs();
      }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit note</ModalHeader>
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
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />

              <Stack direction='row'>
                <FormLabel htmlFor='latitude'>Latitude</FormLabel>
                <NumberInput
                  step={1}
                  defaultValue={latitude}
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
                  defaultValue={longitude}
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
                updateNote({ title, content, latitude, longitude, id });
                setNotes(
                  notes.map((note) => {
                    if (note._id !== id) {
                      return note;
                    } else {
                      return { title, content, latitude, longitude, _id: id };
                    }
                  })
                );
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
  );
}

export default EditCard;
