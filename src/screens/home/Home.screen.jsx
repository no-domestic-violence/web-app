import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Box, Image, Heading, Text, Badge } from '@chakra-ui/react';
import DayJS from 'react-dayjs';
const Home = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetchArticles();
  }, []);

  const url = 'http://localhost:3001/api/';
  const fetchArticles = async () => {
    try {
      let response = await axios.get(`${url}articles`);
      setArticles(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Container columns={2} spacing={10}>
      {articles.map((article, key) => (
        <Box key={key} borderWidth='1px' borderRadius='lg' overflow='hidden'>
          <Heading as='h5' size='sm'>
            {article.title}
          </Heading>
          <Image src={article.url_to_image} alt={article.url_to_image} />
          <Box p='6'>
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
        </Box>
      ))}
    </Container>
  );
};

export default Home;
