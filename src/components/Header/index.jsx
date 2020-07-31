import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Row, Column } from '../Grid';

import useApp from '../../hooks/useApp';

import StyledHeader from './styles';

function Header({ logo, children }) {
  const app = useApp();

  return (
    <StyledHeader className="header">
      <Container className="main-content">
        <Row>
          <Column desktop="2" tablet="2" mobile="2">
            <Link to="/">
              {logo ? <img src={logo} className="app-logo" alt="Logo" /> : app.appName}
            </Link>
          </Column>
          <Column desktop="10" tablet="10" mobile="10">
            {children}
          </Column>
        </Row>
      </Container>
    </StyledHeader>
  );
}

export default Header;
