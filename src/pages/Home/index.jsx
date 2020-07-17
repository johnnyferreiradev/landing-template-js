import React from 'react';

import { Button, LinkButton, AnchorButton } from '../../components/Buttons/index';
import { Container, Row, Column } from '../../components/Grid';

const Home = () => (
  <div>
    <h1>Buttons</h1>
    <Button theme="primary">Botão comum</Button>
    <Button theme="secondary">Botão comum</Button>
    <Button theme="link">Botão comum</Button>
    <Button theme="danger">Botão comum</Button>
    <Button theme="warning">Botão comum</Button>
    <Button theme="success">Botão comum</Button>
    <Button theme="info">Botão comum</Button>

    <LinkButton to="/home">Botão de link</LinkButton>
    <AnchorButton href="https://google.com">Botão de ancora</AnchorButton>

    <h1>Grid system</h1>

    <h2>Container fluid</h2>
    <Container style={{ background: 'blue' }} fluid>
      <Row>
        <Column desktop="12" tablet="12" mobile="12" style={{ background: 'gray' }}>Row 1 - Column 1</Column>
        <Column desktop="6" tablet="12" mobile="12" style={{ background: 'red' }}>Row 1 - Column 2</Column>
      </Row>
      <Row>
        <Column desktop="6" tablet="4" mobile="12" style={{ background: 'yellow' }}>Row 2 - Column 1</Column>
        <Column desktop="6" tablet="8" mobile="12" style={{ background: 'green' }}>Row 2 - Column 2</Column>
      </Row>
    </Container>

    <br />

    <h2>Container no fluid</h2>
    <Container style={{ background: 'red' }}>
      <Row>
        <Column desktop="4" tablet="8" mobile="8" style={{ background: 'orange' }}>Row 1 - Column 1</Column>
        <Column desktop="8" tablet="4" mobile="8" style={{ background: 'pink' }}>Row 1 - Column 2</Column>
      </Row>
      <Row>
        <Column desktop="2" tablet="10" mobile="12" style={{ background: 'purple' }}>Row 2 - Column 1</Column>
        <Column desktop="10" tablet="2" mobile="2" style={{ background: 'brown' }}>Row 2 - Column 2</Column>
      </Row>
    </Container>
  </div>
);

export default Home;
