import React, { useState } from 'react';
import './App.css'; 


import mathish from './assets/mathish.jpeg';
import suthi from './assets/suthi.jpeg';
import suren from './assets/suren.jpeg';
import cholan from './assets/cholan.jpeg';
import sekar from './assets/sekar.jpeg';
import pradeep from './assets/pradeep.jpeg';

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      profilePhoto: mathish,
      name: 'Mathish',
      age: '21 Years',
    },
    {
      id: 2,
      profilePhoto: suthi,
      name: 'Sutheesan',
      age: '21 Years',
    },
    {
      id: 3,
      profilePhoto: suren,
      name: 'Surender',
      age: '20 Years',
    },
    {
      id: 4,
      profilePhoto: cholan,
      name: 'Cholan',
      age: '21 Years',
    },
    {
      id: 5,
      profilePhoto: sekar,
      name: 'Sekar',
      age: '2 Years',
    },
    {
      id:6,
      profilePhoto:pradeep,
      name :'Pradeep',
      age:'22 Years'
    },
  ]);

  return (
    <div className="app-container">
      
      <h1>{users.length} Birthday's Today</h1>

      
      {users.map((user) => (
        <div className="user-profile" key={user.id}>
          <img src={user.profilePhoto} alt={user.name} />
          <div className="user-info">
            <p> <strong>{user.name}</strong></p>
            <p>{user.age}</p>
          </div>
        </div>
      ))}

      {/* Clear button */}
      <button onClick={() => setUsers([])}>Clear</button>
    </div>
  );
}

export default App;
