import React from 'react';
import Layout from '../components/Layout';
import Container from '../components/Container';
import Message from '../components/Message';

const NotFoundPage = () => {
  return (
    <Layout>
      <Container>
        <Message
          content={`Ooops. The page that you are looking for does not exist`}
        ></Message>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
