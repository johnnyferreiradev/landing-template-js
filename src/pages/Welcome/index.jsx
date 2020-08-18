import React from 'react';

import MainLayout from '../../layouts/MainLayout';

import Banner from '../../components/Banner';
import Section from '../../components/Section';
import { Button, AnchorButton } from '../../components/Buttons';

import { Container, Row, Column } from '../../components/Grid';

import directories from '../../assets/images/directories.png';

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

        <Section className="welcome-section">
          <Container>
            <Row>
              <Column desktop="12" tablet="12" mobile="12">
                <h3>O que é?</h3>
              </Column>
            </Row>
            <Row>
              <Column desktop="6" tablet="6" mobile="12">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget feugiat massa.
                  In sed nisi vehicula, imperdiet metus a, ornare enim. Ut pellentesque,
                  turpis eget vulputate efficitur, felis ex laoreet tortor,
                  vel pharetra nibh ante eu enim. Fusce
                  vel dui metus. In vulputate erat ut ante placerat, a fermentum erat malesuada.
                </p>
              </Column>
              <Column desktop="6" tablet="6" mobile="12">
                <img src={directories} alt="Directory structure" />
              </Column>
            </Row>
          </Container>
        </Section>

        <Section background="#ECECEC" className="welcome-section">
          <Container>
            <Row>
              <Column desktop="12" tablet="12" mobile="12">
                <h3>Componentes</h3>
              </Column>
            </Row>
            <Row>
              <Column desktop="6" tablet="6" mobile="12">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget feugiat massa.
                  In sed nisi vehicula, imperdiet metus a, ornare enim. Ut pellentesque,
                  turpis eget vulputate efficitur, felis ex laoreet tortor,
                  vel pharetra nibh ante eu enim. Fusce
                  vel dui metus. In vulputate erat ut ante placerat, a fermentum erat malesuada.
                </p>
              </Column>
            </Row>
            <Row>
              <Column desktop="12" tablet="12" mobile="12">
                <Button theme="secondary">Documentation</Button>
              </Column>
            </Row>
          </Container>
        </Section>

        <Section className="welcome-section">
          <Container>
            <Row>
              <Column desktop="12" tablet="12" mobile="12">
                <h3>Tecnologias utilizadas</h3>
              </Column>
            </Row>
            <Row>
              <Column desktop="6" tablet="6" mobile="12">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget feugiat massa.
                </p>
              </Column>
            </Row>
            <Row>
              <Column desktop="12" tablet="12" mobile="12">
                <Button theme="secondary">Documentation</Button>
                <Button theme="secondary">Documentation</Button>
                <Button theme="secondary">Documentation</Button>
                <Button theme="secondary">Documentation</Button>
              </Column>
            </Row>
          </Container>
        </Section>
      </MainLayout>
    </StyledWelcome>
  );
}

export default Welcome;
