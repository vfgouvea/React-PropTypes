import React from 'react';
import './App.css';
import Lista from './components/lista';

class App extends React.Component {

  render() {
    return <Lista items={['vinicius','nathalia','gaspar','ferreira','gouvea']}  />;
  }

}

export default App;
