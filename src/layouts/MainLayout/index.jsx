import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container, Row, Column } from '../../components/Grid';

const reactLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png';

function MainLayout({ children, className }) {
  return (
    <div className={className}>
      <Header logo={reactLogo}>Header content</Header>
      {children}
      <Footer>
        <Container>
          <Row>
            <Column desktop="6" tablet="6" mobile="12">
              <h2>Contribua com o projeto</h2>
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            </Column>
            <Column desktop="6" tablet="6" mobile="12">
              <h1>Entre em contato</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>Email</p>
              <p>Meu repositório</p>
              <p>Linked in</p>
            </Column>
          </Row>
        </Container>
      </Footer>
    </div>
  );
}

export default MainLayout;
