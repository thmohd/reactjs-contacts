import React, { Component } from 'react'
import ImageInput from './ImageInput'
import SerializeForm from 'form-serialize'


class CreateContact extends Component {

 handleSubmit = (e) =>{
   e.preventDefault()
   const values = SerializeForm(e.target, {hash:true})

   if(this.props.onCreateContact){
     this.props.onCreateContact(values)
   }
 }
  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="create-contact-form">
          <ImageInput
            className="create-contact-avatar-input"
            name='avatarURL'
            maxHeight={64}/>
          <div className="create-contact-details">
            <input type="text" name="name" placeholder="Name"/>
            <input type="text" name="email" placeholder="Email"/>
            <button>Add User</button>
          </div>
        </form>
      </div>
    )
  }
}


export default CreateContact;
