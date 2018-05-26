import React, { Component } from 'react';

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

  render(){

      const contacts = this.props.contacts
      const query = this.state.query

      const showingContacts = query === ''
      ? contacts
      : contacts.filter(contact => {
        return contact.name.toLowerCase().includes(query.toLowerCase())
      })

      return (
        <div>
          <div>
              <input
              onChange={(event) => this.updateQuery(event.target.value) }
              className="search-contacts"
              value = {query}
              />
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
              </li>
            )
          })}
          </ol>
        </div>
      )
    }
}

export default ContactList;
