import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const reactLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png';

function MainLayout({ children, className }) {
  return (
    <div className={className}>
      <Header logo={reactLogo}>Header content</Header>
      {children}
      <Footer>
        <h4>Conteúdo do footer</h4>
        <p>Repositorio do projeto</p>
        <p>Linked in</p>
        <p>Email</p>
      </Footer>
    </div>
  );
}

export default MainLayout;
