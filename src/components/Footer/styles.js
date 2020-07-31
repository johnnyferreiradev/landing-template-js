import styled from 'styled-components';

const styledFooter = styled.footer.attrs(() => ({
  className: 'footer',
}))`
  position: relative;
  bottom: 0px;
  width: 100%;
  background: #ECECEC;
  display: flex;
  justify-content: center;

  .credits {
    width: 100%;
    padding: 8px;
    text-align: center;
  }
`;

export default styledFooter;
