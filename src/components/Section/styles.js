import styled from 'styled-components';

const styledSection = styled.div.attrs(() => ({
  className: 'section',
}))`
  width: 100%;
  background: ${({ background }) => background || 'none'}
`;

export default styledSection;
