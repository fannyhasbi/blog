import React from 'react';

import Nav from './components/Nav';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

class App extends React.Component {
  render(){
    return (
      <div>
        <Nav />
        <Header title="Fanny Hasbi" subTitle="Simple person who love coding :)" />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;