import React from 'react';
import ReactDOM from 'react-dom';

import { useState } from 'react'
import EntryForm from './components/EntryForm';

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: 9004765828 }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchName, setSearchName ] = useState('');

const handleNewName = (event) => {
  setNewName(event.target.value)
}

const handleNewNumber = (event) => {
  setNewNumber(event.target.value)
}

const handleSearch = (event) => {
  setSearchName(event.target.value)
}
const repeatNames = persons.filter(
  person => person.name === newName
);

if (repeatNames.length > 0) {
  alert(`${newName} is already added to phonebook`);
  setNewName("");
  return;
}

const repeatNumbers = persons.filter(
  person => person.number === newNumber
);

if (repeatNumbers.length > 0) {
  alert(`${newNumber} is already added to phonebook`);
  setNewNumber("");
  return;
}

const addEntry = event => {
  event.preventDefault();
  const person = {
    name: newName,
    number: newNumber
  }
  setPersons(persons.concat(person))
  //console.log(persons)
  setNewName("")
  setNewNumber("")
}

  return (
    <div>
      <h2>Phonebook</h2>
      {/* <form onSubmit={addEntry}>
        <div>
          name: <input value={newName} onChange={handleNewName}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNewNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form> */}
      Search for name: 
      <input value={searchName} onChange={handleSearch}/>
      <EntryForm newName={newName} newNumber={newNumber} handleNewNumber={handleNewNumber} handleNewName={handleNewName} addEntry={addEntry}/>
      <h2>Numbers</h2>
      ...
      <div>
        <ul>
          {persons.filter(person => person.name.toLowerCase().includes(searchName.toLowerCase()))
                .map(person => (
                    <li key={person.name}>
                        {person.name} {person.number}
                    </li>
                ))}
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

