import React, { useContext } from 'react';

import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Textarea,
  Stack,
  Checkbox,
  ButtonGroup,
  Container,
} from '@chakra-ui/react';
import { Link, useHistory } from 'react-router-dom';
import { Context as AuthContext } from '../../state/AuthContext';
import appApiClient from '../../api/appApiClient';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
export default function CreateArticle() {
  const { state } = useContext(AuthContext);
  const { id, token } = state;
  const history = useHistory();

  const ArticleSchema = yup.object().shape({
    title: yup.string().required('Title is required').max('24'),
    text: yup.string().required('Text is required'),
    author: yup.string().required('Author is required').max('24'),
    url_to_image: yup
      .string()
      .matches(
        /^https:\/\/(.*)/,
        'Enter correct and secure url which starts from https'
      )
      .required('Url to the image is required'),
    violence_type: yup.array().nullable().required('Choose at leaste one type'),
  });

  const {
    handleSubmit,
    formState: { errors },
    register,
    formState,
  } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {},
    resolver: yupResolver(ArticleSchema),
    shouldFocusError: true,
    shouldUnregister: false,
  });
  const postArticle = async (data, authorId, authToken) => {
    try {
      await appApiClient.post(
        `articles`,
        { ...data, author_id: authorId },
        { headers: { Authorization: `Bearer ${authToken}` } }
      );
    } catch (e) {
      console.error(e);
    }
  };
  function onSubmit(data) {
    postArticle(data, id, token);
    history.push('/');
  }

  return (
    <Container mt={10}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.title && errors.title.message}>
          <FormLabel htmlFor='Title'>Title</FormLabel>
          <Input
            id='title'
            placeholder='Title'
            {...register('title', { required: true })}
          />
          {errors.title && (
            <FormErrorMessage>{errors.title.message}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={errors.text && errors.text.message}>
          <FormLabel htmlFor='text'>Text</FormLabel>
          <Textarea
            placeholder='Text'
            {...register('text', { required: true })}
          />
          {errors.text && (
            <FormErrorMessage>{errors.text.message}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={errors.author && errors.author.message}>
          <FormLabel htmlFor='author'>Author</FormLabel>
          <Input
            placeholder='author'
            {...register('author', { required: true })}
          />
          {errors.author && (
            <FormErrorMessage>{errors.author.message}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl
          isInvalid={errors.url_to_image && errors.url_to_image.message}>
          <FormLabel htmlFor='url_to_image'>Url to image</FormLabel>
          <Input
            placeholder='url_to_image'
            {...register('url_to_image', { required: true })}
          />

          {errors.url_to_image && (
            <FormErrorMessage>{errors.url_to_image.message}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl
          isInvalid={errors.violence_type && errors.violence_type.message}>
          <FormLabel htmlFor='violence_type'>Tags</FormLabel>
          <Stack pl={6} mt={1} spacing={1}>
            <Checkbox value='financial' {...register('violence_type')}>
              Financial
            </Checkbox>
            <Checkbox value='sexual' {...register('violence_type')}>
              Sexual
            </Checkbox>
            <Checkbox value='physical' {...register('violence_type')}>
              Physical
            </Checkbox>
            <Checkbox value='emotional' {...register('violence_type')}>
              Emotional
            </Checkbox>
          </Stack>
          {errors.violence_type && (
            <FormErrorMessage>{errors.violence_type.message}</FormErrorMessage>
          )}
        </FormControl>
        <ButtonGroup>
          <Button
            mt={4}
            colorScheme='teal'
            isLoading={formState.isSubmitting}
            type='submit'>
            Submit
          </Button>
          <Button mt={4} colorScheme='blue'>
            <Link to='/'>Back to home page</Link>
          </Button>
        </ButtonGroup>
      </form>
    </Container>
  );
}
