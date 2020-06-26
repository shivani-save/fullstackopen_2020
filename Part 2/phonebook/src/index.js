import React from 'react';
import ReactDOM from 'react-dom';

import { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

const handleNewName = (event) => {
  setNewName(event.target.value)
}

const repeatNames = persons.filter(
  person => person.name === newName
);

if (repeatNames.length > 0) {
  alert(`${newName} is already added to phonebook`);
  setNewName("");
  return;
}

const addEntry = event => {
  event.preventDefault();
  const person = {
    name: newName
  }
  setPersons(persons.concat(person))
  //console.log(persons)
  setNewName("")
}

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addEntry}>
        <div>
          name: <input value={newName} onChange={handleNewName}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      ...
      <div>
        <ul>
          {persons.map(person => <li>{person.name}</li>)}
        </ul>
      </div>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

