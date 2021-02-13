import { useForm } from 'react-hook-form';
import React from 'react';
import axios from 'axios';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Textarea,
  Stack,
  Checkbox,
} from '@chakra-ui/react';

export default function CreateArticle() {
  const [message, setMessage] = React.useState('');

  const { handleSubmit, errors, register, formState } = useForm();
  const url = 'http://localhost:3001/api/';
  const postArticle = async (data) => {
    try {
      let response = await axios.post(`${url}articles`, data);
      setMessage(response);
    } catch (e) {
      console.error(e);
    }
  };
  function onSubmit(data) {
    postArticle(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormLabel htmlFor='Title'>Title</FormLabel>
        <Input name='title' placeholder='Title' ref={register} />
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor='text'>Text</FormLabel>
        <Textarea name='text' placeholder='Text' ref={register} />
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>
      <FormLabel htmlFor='author'>Author</FormLabel>
      <Input name='author' placeholder='author' ref={register} />
      <FormErrorMessage>
        {errors.author && errors.author.message}
      </FormErrorMessage>
      <FormLabel htmlFor='url_to_image'>Url to image</FormLabel>
      <Input name='url_to_image' placeholder='url_to_image' ref={register} />
      <FormErrorMessage>
        {errors.url_to_image && errors.url_to_image.message}
      </FormErrorMessage>
      <FormLabel htmlFor='violence_type'>Tags</FormLabel>
      <Stack pl={6} mt={1} spacing={1}>
        <Checkbox name='violence_type' value='financial' ref={register}>
          Financial
        </Checkbox>
        <Checkbox name='violence_type' value='sexual' ref={register}>
          Sexual
        </Checkbox>
        <Checkbox name='violence_type' value='physical' ref={register}>
          Physical
        </Checkbox>
        <Checkbox name='violence_type' value='emotional' ref={register}>
          Emotional
        </Checkbox>
      </Stack>
      <Button
        mt={4}
        colorScheme='teal'
        isLoading={formState.isSubmitting}
        type='submit'>
        Submit
      </Button>
    </form>
  );
}
