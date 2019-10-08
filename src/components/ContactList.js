import React from "react";
import Contact from './contact/Contact';

// An array of objects
const contacts = [
  {
    name: 'Elijah Gonzalez',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    online: true 
  },
  {
    name: 'Aubrey Barnett',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    online: false
  },
  {
    name: 'Clinton Hayes',
    avatar: 'https://randomuser.me/api/portraits/men/30.jpg',
    online: true
  },
  {
    name: 'Miriam Webb',
    avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
    online: false
  },
  {
    name: 'Wayne Rose', 
    avatar: 'https://randomuser.me/api/portraits/men/83.jpg',
    online: true 
  }
];

const ContactList = () =>  (
  contacts.map(contact => (
    <Contact
      name={contact.name}
      avatar={contact.avatar}
      online={contact.online}
    />
  ))
) 

export default ContactList;