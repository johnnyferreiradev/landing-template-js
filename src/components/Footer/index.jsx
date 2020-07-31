import React from 'react';

import { Container, Row } from '../Grid';
import { AnchorButton } from '../Buttons';

import StyledFooter from './styles';

function Footer({ children }) {
  return (
    <StyledFooter>
      <Container>
        <Row>
          {children}
        </Row>
        <Row>
          <div className="credits">
            Desenvolvido com amor por
            <AnchorButton href="https://github.com/johnnyferreiradev">Johnny Ferreira</AnchorButton>
          </div>
        </Row>
      </Container>

    </StyledFooter>
  );
}

export default Footer;
