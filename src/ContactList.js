import React, { Component } from 'react';

class ContactList extends Component{
    render(){
      return (
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
      )
    }
}

export default ContactList;
