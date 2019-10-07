import React from 'react';
import './Contact.css';

function Contact(props){
  return (
    <div className="Contact">
    <img className='avatar' src={props.avatar} alt={props.name}></img>
   <div>
    <h4>{props.name}</h4>
    <status> {props.status}
    <p>{props.online ? "Online" : 'Offline'}</p>
    </status>
    </div>
  </div>
);
}

export default Contact;