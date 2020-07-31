import React from 'react';

import StyledSection from './styles';

function Section({ children, background }) {
  return (
    <StyledSection background={background}>{children}</StyledSection>
  );
}

export default Section;
