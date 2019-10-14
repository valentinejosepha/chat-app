import React from 'react';
import './Contact.css';

class Contact extends React.Component {
  constructor (props) {
    super(props);
      this.state = {
        online: false,
    }; 
  }

  
    render() {
      return (
        <div className="Contact">
          <img className='avatar' src={this.props.avatar} alt={this.props.name}></img>
          <div>
            <h4>{this.props.name}</h4>
          <div className="status">
            <div
            className= {this.state.online ? 'status-online' : 'status-offline'}>
            </div>
            
            <p  onClick={event => {
                const newStatus = !this.state.online;
                this.setState({ online: newStatus });
              }}>
              {this.state.online ? 'Online' : 'Offline'} </p>
            
          </div>
          </div>
        </div>
      );
      
    }  
    }
  

export default Contact;