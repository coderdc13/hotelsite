import React, { Component } from 'react';
import './App.css';
import { Jumbotron } from 'react-bootstrap';
import LandingPage from './components/LandingPage/LandingPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron>
          <h1>Funky Hotel!!!</h1>
        </Jumbotron>
        <LandingPage />
      </div>
    );
  }
}

export default App;
