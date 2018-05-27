import React, { Component } from 'react'
import ContactList from './ContactList'
import CreateContact from './CreateContact'
import * as ContactsAPI from './utils/ContactsAPI'
import { Route } from 'react-router-dom'

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

    ContactsAPI.remove(contact)
  }

  createContact = (contact) => {
    ContactsAPI.create(contact).then(()=>{
      this.setState((currentState) =>({
        contacts: currentState.contacts.concat([contact])
      }))
    })
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
        <Route exact path="/" render={ () => (
          <ContactList
             contacts={this.state.contacts}
             onRemoveContact={this.removeContact} />
        )}/>
        <Route  path="/create" render={({history})=>(
          <CreateContact onCreateContact={(contact)=>{
            this.createContact(contact)
            history.push('/')
          }} />
        )}/>
      </div>
    );
  }
}

export default App;
