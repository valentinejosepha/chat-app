import React from 'react';
import Contact from './components/Contact'


function App() {
  return (
    <div className="App">

      <Contact
        name= 'Clinton Hayes'
        avatar= 'https://randomuser.me/api/portraits/men/30.jpg'
        online= {true}
      />

     <Contact
        name= 'Miriam Webb'
        avatar= 'https://randomuser.me/api/portraits/women/27.jpg'
        online= {false}
      />

      <Contact
        name= 'Wayne Rose' 
        avatar= 'https://randomuser.me/api/portraits/men/83.jpg'
        online= {true}
      />   
      </div>
  );
}
export default App;
