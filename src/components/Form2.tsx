//avoid redundancies in state

import { useState } from 'react';

export default function Form() {
//firstname and last name have different states because they are different entities
  const [firstName, setFirstName] = useState(''); 
  const [lastName, setLastName] = useState('');

  const fullName = firstName + ' ' + lastName; 

  //this function will update the state of firstName
  function handleFirstNameChange(event : React.ChangeEvent<HTMLInputElement>) {
    setFirstName(event.target.value);
  }

  //this function will update the state of lastName
  function handleLastNameChange(event : React.ChangeEvent<HTMLInputElement>) {
    setLastName(event.target.value);
  }

  return (
    <>
      <h2>Let’s check you in</h2>
      <label>
        First name:{' '}
        <input
          value={firstName} //the value of the input field is the value of the firstName state
          onChange={handleFirstNameChange} //when the input field changes, the handleFirstNameChange function is called
        />
      </label>
      <label>
        Last name:{' '}
        <input
          value={lastName} //the value of the input field is the value of the lastName state
          onChange={handleLastNameChange} //when the input field changes, the handleLastNameChange function is called
        />
      </label>
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
    </>
  );
}
