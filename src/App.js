import React, { Component } from 'react';


class ContactList extends Component{
    render(){
      return (
        <div className="contact-list">
          <div className="contact-list-item">
            <div className="contact-avatar">
              <img src=""/>
            </div>
            <div className="contact-details">
              <p>Name</p>
              <p>Email</p>
            </div>
          </div>
          <div className="contact-list-item">
            <div className="contact-avatar">
              <img src=""/>
            </div>
            <div className="contact-details">
              <p>Name</p>
              <p>Email</p>
            </div>
          </div>
        </div>
      )
    }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactList />
      </div>
    );
  }
}

export default App;
