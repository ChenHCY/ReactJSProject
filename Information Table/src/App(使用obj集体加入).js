import './App.css';
import React, { useState } from 'react';

function App() {
  const [contact, setContact] = useState([
    { id: 1, name: 'John Doe', address: '123 Main St', phoneNumber: '555-1234' },
    { id: 2, name: 'Jane Smith', address: '456 Oak Ave', phoneNumber: '555-5678' },
  ]);

  const [newUser, setNewUser] = useState({
    name: '',
    addUser: '',
    phoneNumber: '',
  });

  const addUser = () => {
    let random = Math.random();
    let newUserId = random; //get unique id

    const newUserObj = {...newUser, id: newUserId}; //create new user information

    setContact([...contact, newUserObj]); //save the new user information into user infor list
    
    //the restart the information
    setNewUser({name: '', address: '', phoneNumber: ''});
  }

  const deletUser = (id) => {
    // Filter out the contact with the specified ID
    const newArr = contact.filter((item) => item.id !== id); //save all the user not delete id
    setContact(newArr); // Update the contacts state without the deleted contact
  }


  return(
  <div className='App'>
    <div>
      <label>Name: </label>
      <input type='text' value={newUser.name} onChange={(e) => setNewUser({...newUser, name: e.target.value})} />
      <label>Address: </label>
      <input type='text' value={newUser.address} onChange={(e) => setNewUser({...newUser, address: e.target.value})} />
      <label>Phone: </label>
      <input type='text' value={newUser.phoneNumber} onChange={(e) => setNewUser({...newUser, phoneNumber: e.target.value})} />
      <button onClick={addUser}> Add User</button>
    </div>

  
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Phone Number</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {contact.map((item) => (
          <tr key = {item.id}>
            <td>{item.name}</td>
            <td>{item.address}</td>
            <td>{item.phoneNumber}</td>
            <td>
              <button onClick={() => deletUser(item.id)}>Delet User</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
}

export default App;
