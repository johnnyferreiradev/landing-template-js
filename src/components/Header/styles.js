import styled from 'styled-components';

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #20232A;
  color: #ffffff;

  .main-content {
    padding: 16px;
    display: flex;
    justify-content: center;
    align-items: center;

    .app-logo {
      max-width: 100px;
    }

    a {
      color: #ffffff;
    }
  }

`;

export default Header;
