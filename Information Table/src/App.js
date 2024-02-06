import './App.css';
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState("");
  const [address, setAdress] = useState("");
  const [phone, setPhone] = useState("");

  const [contact, setContact] = useState([
    { id: 1, name: 'John Doe', address: '123 Main St', phoneNumber: '555-1234' },
    { id: 2, name: 'Jane Smith', address: '456 Oak Ave', phoneNumber: '555-5678' },
  ]);

  //save the user enter name
  const hanleName = (e) => {
    setName(e.target.value);
  }

  const hanleAddress = (e) => {
    setAdress(e.target.value);
  }

  const hanlePhone = (e) => {
    setPhone(e.target.value);
  }

  const addUser = () => {
    let newUserId = contact.length + 1; //get unique id
    const newUser = {id: newUserId, name: name, address: address, phoneNumber: phone}; //create new user information
    setContact([...contact, newUser]); //save the new user information into user infor list
    //the restart the information
    setName("");
    setAdress("");
    setPhone("");
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
      <input type='text' value={name} onChange={hanleName} />
      <label>Address: </label>
      <input type='text' value={address} onChange={hanleAddress} />
      <label>Phone: </label>
      <input type='text' value={phone} onChange={hanlePhone} />
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
