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
      return (
        <div>
          <div>
              <input
              onChange={(event) => this.updateQuery(event.target.value) }
              className="search-contacts"
              value = {this.state.query}
              />
              //{this.state.query}
            </div>
          <ol className="contact-list">
          {this.props.contacts.map((contact) => {
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
