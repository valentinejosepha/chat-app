import React from 'react';
import './Contact.css';

function Contact (props) {

  return (

  <div className="Contact">
    <img className='avatar' src={props.avatar} alt={props.name}></img>
    <div>
      <h4>{props.name}</h4>
    <div className="status">
      <div className= {props.online ? 'status-online' : 'status-offline'}>
    </div>
      <p>{props.online ? "Online" : 'Offline'} </p>
    </div>
    </div>
  </div>

);
}

export default Contact;