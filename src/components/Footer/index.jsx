import React from 'react';

import { Container, Row, Column } from 'components/Grid';
import { AnchorButton } from 'components/Buttons';
import { WhatsappIcon, InstagramIcon, FacebookIcon } from 'components/Icons';

import StyledFooter from './styles';

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Row>
          <Container>
            <Row>
              <Column desktop="12" tablet="12" mobile="12" className="flex f-column j-c-center a-i-center">
                <h2>Entre em contato</h2>
                <div className="social-networks">
                  <AnchorButton href={' '}>
                    <WhatsappIcon />
                  </AnchorButton>
                  <AnchorButton href={' '}>
                    <InstagramIcon />
                  </AnchorButton>
                  <AnchorButton href={' '}>
                    <FacebookIcon />
                  </AnchorButton>
                </div>
              </Column>
            </Row>
          </Container>
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
