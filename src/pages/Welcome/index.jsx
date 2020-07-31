import React from 'react';

import Header from '../../components/Header';

const reactLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png';

function Welcome() {
  return (
    <div className="welcome-page">
      <Header logo={reactLogo}>teste</Header>
    </div>
  );
}

export default Welcome;
