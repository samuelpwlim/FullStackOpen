import { useState, useEffect } from 'react'

import Person from './components/Person'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

import personService from './services/people'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setNewFilter] = useState('')

  const handleNameChange = event => {
    setNewName(event.target.value)
  }

  const handleNumbChange = event => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = event => {
    setNewFilter(event.target.value)
  }

  const peopleToShow = (filter === '')
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  useEffect(() => {
    personService
      .getAll()
      .then(initialPeople => {
        setPersons(initialPeople)
      })
  }, []) //sets initial people from server

  const addPerson = event => {
    event.preventDefault()

    const match = persons.find(person => person.name === newName) //finds match

    match ? updateNum(match.id)
          : genPerson() //checks for match, alerts if so, adds new person if not
  }

  const genPerson = () => {
    const personObj = {
      name: newName,
      number: newNumber,
    } //new person object
    
    personService
      .create(personObj)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      }) //creates new person at url/id on server
  }

  const delPerson = id => {
    personService
      .remove(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id))
      })
  }

  const updateNum = id => {
    if(!window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) 
    {
      return
    }
    const personObj = {
      name: newName,
      number: newNumber,
    }
    
    personService
      .replace(id, personObj)
      .then(returnedPerson => {
        setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
        setNewName('')
        setNewNumber('')
      })
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
      
      <div>
        {peopleToShow.map(person => 
            <Person 
              key={person.id}
              name={person.name} 
              number={person.number} 
              del={() => delPerson(person.id)}/>
        )}
      </div>
    </div>
  )
}

export default App