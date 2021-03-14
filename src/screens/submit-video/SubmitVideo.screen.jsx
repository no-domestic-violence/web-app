import React, { useState, useEffect } from 'react';
import baseURL from '../../config';
import {
  FormLabel,
  FormControl,
  Input,
  Button,
  ButtonGroup,
  AspectRatio,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import appApiClient from '../../api/appApiClient';

const SubmitVideo = () => {
  const [newImage, setNewImage] = useState([]);
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [dislayImage, setDislayImage] = useState();
  const handleUrl = (e) => {
    setUrl(e.target.value);
  };
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('imageData', image);
    formData.append('title', title);
    formData.append('url_to_video', url);
    appApiClient
      .post('/videos', formData)
      .then((res) => console.log(res))
      // .then((res) => setDislayImage(res.data.document.imageData))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    const getFilesList = async () => {
      try {
        const { data } = await appApiClient.get(`/videos`);
        setDislayImage(data);
      } catch (error) {
        console.error(error);
      }
    };

    getFilesList();
  }, []);
  console.log(dislayImage);
  return (
    <>
      <form onSubmit={handleSubmit} encType='multipart/formdata'>
        <FormControl>
          <FormLabel htmlFor='Title'>Title of the video</FormLabel>
          <Input name='title' placeholder='Title' onChange={handleTitle} />
        </FormControl>
        <FormLabel htmlFor='url_to_video'>Video url</FormLabel>
        <Input
          name='url_to_video'
          placeholder='video url'
          onChange={handleUrl}
        />
        <FormLabel htmlFor='violence_type'>Tags</FormLabel>
        <FormLabel htmlFor='imageData'>Upload image</FormLabel>
        <Input name='imageData' type='file' onChange={handleImageUpload} />
        <ButtonGroup>
          <Button mt={4} colorScheme='teal' type='submit'>
            Submit
          </Button>
          <Button mt={4} colorScheme='blue'>
            <Link to='/'>Back to home page</Link>
          </Button>
        </ButtonGroup>
      </form>
      {dislayImage?.length > 0
        ? dislayImage.map((element) => (
            <>
              <div>{element.title}</div>
              <AspectRatio maxW='560px' ratio={1}>
                <iframe
                  title='naruto'
                  src={element.url_to_video}
                  allowFullScreen
                />
              </AspectRatio>
              <img
                src={`${baseURL}/${element.imageData}`}
                alt='upload-image'
                className='process__image'
              />
            </>
          ))
        : null}
    </>
  );
};
export default SubmitVideo;
