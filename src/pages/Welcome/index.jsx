import React from 'react';

import MainLayout from '../../layouts/MainLayout';

import Banner from '../../components/Banner';
import Section from '../../components/Section';
import { Button, AnchorButton } from '../../components/Buttons';

import { Row, Column } from '../../components/Grid';

import StyledWelcome from './styles';

const reactLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png';

function Welcome() {
  return (
    <StyledWelcome>
      <MainLayout className="welcome-page">
        <Banner backgroundImage={reactLogo}>
          <Row alignItems="flex-end">
            <Column desktop="12" tablet="12" mobile="12">
              <div className="banner-texts">
                <h1 className="banner-title">Conteúdo do banner</h1>
                <h3 className="banner-subtitle">This is a subtitle</h3>
              </div>
            </Column>
          </Row>
          <Row>
            <Column desktop="12" tablet="12" mobile="12">
              <div className="banner-actions">
                <AnchorButton href="https://github.com/johnnyferreiradev/landing-template" theme="primary">Gitub</AnchorButton>
                <Button theme="secondary">Documentation</Button>
              </div>
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
    </StyledWelcome>
  );
}

export default Welcome;
