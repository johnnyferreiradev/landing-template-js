import React from 'react';

import Header from '../../components/Header';
import Banner from '../../components/Banner';

const reactLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png';

function Welcome() {
  return (
    <div className="welcome-page">
      <Header logo={reactLogo}>teste</Header>
      <Banner backgroundImage={reactLogo}>
        <h1>Conteúdo do banner</h1>
      </Banner>
    </div>
  );
}

export default Welcome;
