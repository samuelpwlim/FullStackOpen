import { useState } from 'react'
import Person from './components/Person'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setNewFilter] = useState('')

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