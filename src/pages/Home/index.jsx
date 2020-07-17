import React from 'react';

import { Button, LinkButton, AnchorButton } from '../../components/Buttons/index';
import { Container, Row, Column } from '../../components/Grid';
import Card from '../../components/Card';

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
      <Row justifyContent="flex-end">
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
      <Row alignItems="center">
        <Column desktop="4" tablet="8" mobile="8" style={{ background: 'orange' }}>Row 1 - Column 1</Column>
        <Column desktop="8" tablet="4" mobile="8" style={{ background: 'pink' }}>Row 1 - Column 2</Column>
      </Row>
      <Row>
        <Column desktop="2" tablet="10" mobile="12" style={{ background: 'purple' }}>Row 2 - Column 1</Column>
        <Column desktop="10" tablet="2" mobile="2" style={{ background: 'brown' }}>Row 2 - Column 2</Column>
      </Row>
    </Container>

    <h1>Card</h1>

    <h2>Class card</h2>
    <Container>
      <Row>
        <Column desktop="12" style={{ background: '#f0f0f0' }}>
          <div className="card">
            <h3>Card content</h3>
          </div>
        </Column>
      </Row>
    </Container>

    <h2>Component card</h2>
    <Container>
      <Row>
        <Column desktop="12" style={{ background: '#f0f0f0' }}>
          <Card width="max-content">
            <h3>Styled component card content</h3>
          </Card>
        </Column>
      </Row>
    </Container>

    <h1>Flexbox classes</h1>
    <div className="flex j-c-end a-i-center">
      <div>Element 1</div>
      <div>Element 2</div>
      <div>Element 3</div>
    </div>

    <h1>Margin and Padding classes</h1>
    <ul className="ml-3 bg-primary txt-white">
      <li className="p-3 bg-info">Element 1</li>
      <li className="pl-3 ml-3 bg-danger">Element 2</li>
      <li className="mt-2 bg-warning">Element 3</li>
    </ul>
  </div>
);

export default Home;
