import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import PhoneService from './services/PhoneService'
import Notification from './services/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [message, setMessage] =useState(null)

  useEffect(() => {
    PhoneService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addName = (event) => {
    event.preventDefault()

    const nameObject = {
      name: newName,
      number: newNumber
    }

    if (persons.some(e => e.name === newName)) {
      window.alert(newName + ' is already added to phonebook')
    } else {
      setPersons(persons.concat(nameObject))
    }

    PhoneService
      .create(nameObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setMessage(
          "Added " + returnedPerson.name
        )
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      })
      

    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    console.log(event.target.value)
    setNewSearch(event.target.value)
  }

  const deletePerson = person => {
    if (window.confirm("Delete " + person.name + " ?")) {

      PhoneService
        .remove(person.id)
        .then(removedPerson => {
          setPersons(persons.filter(persona => persona.id !== person.id))
          setMessage(
            "Deleted " + person.name
          )
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
        
    }
  }

  return (
    <div>

      <h2>Phonebook</h2>
      <Notification message={message}/>
      <div>
        <Filter newSearch={newSearch} handleSearchChange={handleSearchChange} />
      </div>

      <h3>Add a new</h3>
      <PersonForm addName={addName} newName={newName} newNumber={newNumber}
        handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />

      <h3>Numbers</h3>
      <Persons persons={persons} newSearch={newSearch} deletePerson={deletePerson} />
    </div>
  )
}

export default App