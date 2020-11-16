import React from 'react';

import Banner from 'components/Banner';
import { Button, AnchorButton } from 'components/Buttons';

import { Row, Column } from 'components/Grid';

import StyledWelcome from './styles';

const reactLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png';

function Welcome() {
  return (
    <StyledWelcome>
      <Banner backgroundImage={reactLogo}>
        <Row alignItems="flex-end">
          <Column desktop="12" tablet="12" mobile="12" className="flex f-column j-c-center a-i-center">
            <h1 className="banner-title">Fast Landing</h1>
            <h3 className="banner-subtitle">Template base para a criação de aplicações React</h3>
          </Column>
        </Row>
        <Row>
          <Column desktop="12" tablet="12" mobile="12" className="flex j-c-center">
            <div className="banner-actions">
              <AnchorButton href="https://github.com/johnnyferreiradev/landing-template" theme="primary">Repositório</AnchorButton>
              <Button theme="secondary">Componentes</Button>
            </div>
          </Column>
        </Row>
      </Banner>
    </StyledWelcome>
  );
}

export default Welcome;
