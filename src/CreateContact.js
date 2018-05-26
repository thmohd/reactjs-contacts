import React, { Component } from 'react'
import ImageInput from './ImageInput'


class CreateContact extends Component {

  render(){
    return (
      <div>
        <form className="create-contact-form">
          <ImageInput className="create-contact-avatar-input"/>
          <div className="create-contact-details">
            <input type="text" name="name" placeholder="Name"/>
            <input type="text" name="email" placeholder="Email"/>
          </div>
        </form>
      </div>
    )
  }
}


export default CreateContact;
