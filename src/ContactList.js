import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class ContactList extends Component{

  constructor(props){
    super(props)
    this.state = {
      query: ''
    }
  }

  updateQuery = (query) =>{
    this.setState({
      query: query
    })
  }

  clearQuery = () =>{
    this.updateQuery('')
  }

  render(){

      const { contacts, onRemoveContact } = this.props
      const query = this.state.query

      const showingContacts = query === ''
      ? contacts
      : contacts.filter(contact => {
        return contact.name.toLowerCase().includes(query.toLowerCase())
      })

      return (
        <div className="list-contacts">
          <div className="list-contacts-top">
              <input
              onChange={(event) => this.updateQuery(event.target.value) }
              className="search-contacts"
              value = {query}
              />
              <Link className="add-contact" to='/create'>Add User</Link>
              {contacts.length !== showingContacts.length && (
                <div className="showing-contacts">
                  <span>
                    Showing {showingContacts.length} out of {contacts.length}
                  </span>
                  <button
                    onClick={() => this.clearQuery()}
                  >Show All</button>
                </div>
              ) }
            </div>
          <ol className="contact-list">
          {showingContacts.map((contact) => {
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
                <button
                  onClick={() => onRemoveContact(contact) }
                  className="contact-remove">
                  Remove Contact
                </button>
              </li>
            )
          })}
          </ol>
        </div>
      )
    }
}

export default ContactList;
