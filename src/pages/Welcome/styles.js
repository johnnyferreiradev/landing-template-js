import styled from 'styled-components';

const StyledWelcome = styled.div`
  .welcome-page {
    .grid-container {
      justify-content: flex-end;

      .banner-texts {
        margin: 32px 0px;

        .banner-title {
          text-align: center;
          font-size: 48px;
        }

        .banner-subtitle {
          text-align: center;
        }
      }

      .banner-actions {
        margin: 32px 0px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        > * {
          margin: 0 4px;
        }
      }
    }

    .welcome-section {
      padding: 32px 0px;
      display: flex;
      justify-content: center;
    }
  }
`;

export default StyledWelcome;
