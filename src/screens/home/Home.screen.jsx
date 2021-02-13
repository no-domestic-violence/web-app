import React, { useState, useEffect } from 'react';
import {
  Container,
  Box,
  Image,
  Heading,
  Text,
  Badge,
  Button,
} from '@chakra-ui/react';

import appApiClient from '../../api/appApiClient';

import DayJS from 'react-dayjs';
const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, [articles]);
  const fetchArticles = async () => {
    try {
      let response = await appApiClient.get(`/articles`);
      setArticles(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  const handleDelete = async (id) => {
    try {
      return await appApiClient.delete(`articles/${id}`);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Container columns={2} spacing={10}>
      {articles.map((article, key) => (
        <Box
          key={key}
          borderWidth='1px'
          borderRadius='lg'
          overflow='hidden'
          p={5}
          mt={5}>
          <Heading as='h5' size='sm'>
            {article.title}
          </Heading>
          <Image src={article.url_to_image} alt={article.url_to_image} />
          <Box>
            <Badge borderRadius='full' px='2' colorScheme='teal'>
              New
            </Badge>
            <Badge borderRadius='full' px='2' colorScheme='pink'>
              {article.violence_type}
            </Badge>
            <Text fontSize='xs'>{article.text}</Text>
            <Text as='i' fontSize='xs'>
              Author - {article.author} created at{' '}
              <DayJS element='span' format='MM-DD-YYYY'>
                {article.created_at}
              </DayJS>
            </Text>
          </Box>
          <Button
            mt={4}
            colorScheme='pink'
            size='sm'
            onClick={() => handleDelete(article._id)}>
            Delete Article
          </Button>
        </Box>
      ))}
    </Container>
  );
};

export default Home;
