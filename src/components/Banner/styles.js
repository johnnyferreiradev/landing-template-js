import styled from 'styled-components';

const styledBanner = styled.div.attrs(() => ({
  className: 'banner',
}))`
  width: 100%;
  height: 600px;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  background-color: #282C34;
  color: #ffffff;

  display: flex;
  justify-content: center;
`;

export default styledBanner;
