import { useState, useEffect } from 'react'
import axios from 'axios'
import Person from './components/Person'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setNewFilter] = useState('')

  useEffect(() => {
    console.log('useEffect');
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled');
        setPersons(response.data)
      })

  }, [])

  const addPerson = (event) => {
    event.preventDefault()

    const match = persons.find(person => person.name === newName)
    
    match ? alert(`${newName} is already added to phonebook`)
          : genPerson()
  }

  const genPerson = () => {
    const personObj = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    setPersons(persons.concat(personObj))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    // console.log(event.target.value);
    setNewName(event.target.value)
  }

  const handleNumbChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filter={filter} handleFilter={handleFilterChange} />
      
      <h3>Add a new</h3>

      <PersonForm 
        newName={newName} newNumber={newNumber} 
        handleNameChange={handleNameChange} handleNumbChange={handleNumbChange} 
        addPerson={addPerson} 
      />

      <h3>Numbers</h3>
      
      <Persons persons={persons} filter={filter} />
    </div>
  )
}

export default App