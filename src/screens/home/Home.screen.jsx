import React, { useState, useEffect, useContext } from 'react';
import {
  Container,
  Box,
  Image,
  Heading,
  Text,
  Badge,
  Button,
} from '@chakra-ui/react';
import DayJS from 'react-dayjs';
import { LoginForm } from '../../components';

import appApiClient from '../../api/appApiClient';
import { Context as AuthContext } from '../../state/AuthContext';

const Home = () => {
  const { state } = useContext(AuthContext);
  const { token } = state;
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    try {
      const response = await appApiClient.get(`/articles`);
      setArticles(response.data);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    fetchArticles();
  }, []);

  const handleDelete = async (id, authorId) => {
    try {
      await appApiClient.delete(`articles/${id}`, {
        headers: { 'auth-token': token },
        data: { author_id: authorId },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      {!state.isAuthenticated ? (
        <LoginForm />
      ) : (
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
                {article.violence_type.map((type) => (
                  <Badge
                    borderRadius='full'
                    px='2'
                    colorScheme='pink'
                    key={key}>
                    {type}
                  </Badge>
                ))}
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
                // eslint-disable-next-line
                onClick={() => handleDelete(article._id, article.author_id)}>
                Delete Article
              </Button>
            </Box>
          ))}
        </Container>
      )}
    </div>
  );
};

export default Home;
