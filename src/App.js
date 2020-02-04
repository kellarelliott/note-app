import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import List from './components/Lists';
import Note from './components/Note';
import axios from 'axios';
import urlFor from './helpers/urlFor';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showNote: false,
      notes: [],
      note: {}
    };
  }

  toggleNote = () => {
    this.setState({
      showNote: !this.state.showNote
    });
  }

  getNotes = () => {
    axios.get(urlFor('notes'))
      .then((res) => this.setState({ notes: res.data }))
      .catch((err) => console.log(err.response.data));
  }

  getNote = (id) => {
    axios.get(urlFor(`notes/${id}`))
      .then((res) => this.setState({ note: res.data, showNote: true }))
      .catch((err) => console.log(err.response.data));
  }

  submitNote = (data) => {
    console.log(data);
  }
  render() {
    const { showNote, notes, note } = this.state;
    return (
      <div className="App">
        <Nav toggleNote={this.toggleNote} showNote={showNote} />
        {showNote ?
          <Note
            note={note}
            submitNote={this.submitNote}
          />
          :
          <List
            getNotes={this.getNotes}
            notes={notes}
            getNote={this.getNote}
          />
        }
      </div>
    );
  }
}


export default App;
