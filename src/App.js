import React, { Component } from 'react'
import ContactList from './ContactList'
import * as ContactsAPI from './utils/ContactsAPI'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      contacts: []
    }
  }

  removeContact = (contact) => {
    this.setState((currentState) => ({
      contacts: currentState.contacts.filter((c) =>{
        return c.id !== contact.id
      })
    }))
  }

  componentWillMount(){
    ContactsAPI.getAll().then((contacts) => {
      this.setState({
        contacts: contacts
      })
    })
  }

  render() {
    return (
      <div className="App">
        <ContactList
           contacts={this.state.contacts}
           onRemoveContact={this.removeContact} />
      </div>
    );
  }
}

export default App;
