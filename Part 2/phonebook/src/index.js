import React, { useState, useEffect } from 'react'
//import axios from 'axios'
import ReactDOM from 'react-dom';

import EntryForm from './components/EntryForm';
import Filter from './components/Filter';
import Display from './components/Display';
import operations from './services/operations';

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: 9004765828 }
  ]) 

  useEffect(() => {
    operations.getAll()
      .then(response => setPersons(response))
  }, []);

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchName, setSearchName ] = useState('');

  // const hook = () => {
  //   console.log('effect')
  //   axios
  //     .get('http://localhost:3001/persons')
  //     .then(response => {
  //       console.log('promise fulfilled')
  //       setPersons(response.data)
  //     })
  // }
  
  // useEffect(hook, [])

const handleNewName = (event) => {
  setNewName(event.target.value)
}

const handleNewNumber = (event) => {
  setNewNumber(event.target.value)
}

const handleSearch = (event) => {
  setSearchName(event.target.value)
}

const handleDelete = (person) => {
  const result = window.confirm(`Delete ${person.name}`)

   if (result === true) {
     operations.remove(person.id)
       .then(response => console.log("DELETED", person))
   }

   const updatedPersons = persons.filter(p => p.id !== person.id)
   setPersons(updatedPersons)
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
  operations.create(person)
        .then(response => {
          setPersons(persons.concat(response))
          console.log("Added: ", response)
        })
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
      <Filter searchName={searchName} handleSearch={handleSearch}/>
      <EntryForm newName={newName} newNumber={newNumber} handleNewNumber={handleNewNumber} handleNewName={handleNewName} addEntry={addEntry}/>
      <h2>Numbers</h2>
      ...
      {/* <div>
        <ul>
          {persons.filter(person => person.name.toLowerCase().includes(searchName.toLowerCase()))
                .map(person => (
                    <li key={person.name}>
                        {person.name} {person.number}
                    </li>
                ))}
        </ul>
      </div> */}
      <Display persons={persons} searchName={searchName} handleDelete={handleDelete}/>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

