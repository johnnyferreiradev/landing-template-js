import React from 'react';

import MainLayout from '../../layouts/MainLayout';

import Banner from '../../components/Banner';
import Section from '../../components/Section';
import { Button, AnchorButton } from '../../components/Buttons';

import { Row, Column } from '../../components/Grid';

const reactLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png';

function Welcome() {
  return (
    <MainLayout className="welcome-page">
      <Banner backgroundImage={reactLogo}>
        <Row>
          <Column>
            <h1>Conteúdo do banner</h1>
            <h3>Subtitle</h3>
          </Column>
        </Row>
        <Row>
          <Column>
            <AnchorButton href="https://github.com/johnnyferreiradev/landing-template" theme="primary">Gitub</AnchorButton>
            <Button theme="secondary">Documentation</Button>
          </Column>
        </Row>
      </Banner>

      <Section>
        <h3>Conteúdo da seção 1</h3>
        <p>Paragrafo sobre a seção 1</p>
      </Section>

      <Section background="#ECECEC">
        <h3>Conteúdo da seção 2</h3>
        <p>Paragrafo sobre a seção 2</p>
      </Section>

      <Section>
        <h3>Conteúdo da seção 2</h3>
        <p>Paragrafo sobre a seção 2</p>
      </Section>
    </MainLayout>
  );
}

export default Welcome;
