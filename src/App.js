import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ContactList from './ContactList'

const contacts = [
    {
      id: 'ryan',
      name: 'Ryan Florence',
      email: 'ryan@reacttraining.com',
      avatarURL: 'http://localhost:5001/ryan.jpg'
    },
    {
      id: 'michael',
      name: 'Michael Jackson',
      email: 'michael@reacttraining.com',
      avatarURL: 'http://localhost:5001/michael.jpg'
    },
    {
      id: 'tyler',
      name: 'Tyler McGinnis',
      email: 'tyler@reacttraining.com',
      avatarURL: 'http://localhost:5001/tyler.jpg'
    }
  ]

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar  contacts={contacts}/>
        <ContactList contacts={contacts} />
      </div>
    );
  }
}

export default App;
