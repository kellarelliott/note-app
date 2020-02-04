import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import List from './components/Lists';
import Note from './components/Note';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <List />
        <Note />
      </div>
    );
  }
}

export default App;
