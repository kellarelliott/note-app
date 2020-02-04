import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import List from './components/Lists';
import Note from './components/Note';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showNote: false
    };
  }

  toggleNote = () => {
    this.setState({
      showNote: !this.state.showNote
    });
  }
  render() {
    const { showNote } = this.state;
    return (
      <div className="App">
        <Nav toggleNote={this.toggleNote} showNote={showNote} />
        {showNote ? <Note /> : <List />}
      </div>
    );
  }
}


export default App;
