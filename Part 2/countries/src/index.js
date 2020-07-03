import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom';

import Filter from './components/Filter';
import Display from './components/Display';

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ searchName, setSearchName ] = useState("")

  const hook = () => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }
  
  useEffect(hook, [])

const handleSearch = (event) => {
  setSearchName(event.target.value)
}

//TODO figure out how this is different from handleSearch
const showButton = (name) => {
  setSearchName(name)
}

  return (
    <div>
      <Filter searchName={searchName} handleSearch={handleSearch}/>
      <h2>Countries</h2>
      <Display countries={countries} searchName={searchName} showButton={showButton}/>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);


