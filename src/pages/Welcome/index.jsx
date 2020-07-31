import React from 'react';

import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Section from '../../components/Section';

const reactLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png';

function Welcome() {
  return (
    <div className="welcome-page">
      <Header logo={reactLogo}>teste</Header>
      <Banner backgroundImage={reactLogo}>
        <h1>Conteúdo do banner</h1>
      </Banner>

      <Section>
        <h3>Conteúdo da sessão 1</h3>
        <p>Paragrafo sobre a sessão 1</p>
      </Section>

      <Section background="#ECECEC">
        <h3>Conteúdo da sessão 2</h3>
        <p>Paragrafo sobre a sessão 2</p>
      </Section>
    </div>
  );
}

export default Welcome;
