import React from 'react';

import { Button, LinkButton, AnchorButton } from '../../components/Buttons/index';

const Home = () => (
  <div>
    <Button theme="primary">Botão comum</Button>
    <Button theme="secondary">Botão comum</Button>
    <Button theme="link">Botão comum</Button>
    <Button theme="danger">Botão comum</Button>
    <Button theme="warning">Botão comum</Button>
    <Button theme="success">Botão comum</Button>
    <Button theme="info">Botão comum</Button>

    <LinkButton to="/home">Botão de link</LinkButton>
    <AnchorButton href="https://google.com">Botão de ancora</AnchorButton>
  </div>
);

export default Home;
