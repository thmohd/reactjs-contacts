import React, { Component } from 'react';

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

class SearchBar extends Component{
    render(){
      return (
        <input className="search-contacts"/>
      )
    }
}

class ContactList extends Component{
    render(){
      return (
        <ol className="contact-list">

        {contacts.map((contact) => {
          return (
            <li className="contact-list-item" key={contact.id}>
              <div className="contact-avatar" style={{
                backgroundImage: `URL(${contact.avatarURL})`
              }}>
              </div>
              <div className="contact-details">
                <p>{contact.name}</p>
                <p>{contact.email}</p>
              </div>
            </li>
          )
        })}
        </ol>
      )
    }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <ContactList />
      </div>
    );
  }
}

export default App;
