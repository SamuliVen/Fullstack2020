import React from 'react'

const Persons = ({ persons, newSearch, deletePerson }) => {
    let filteredList = []
    if (newSearch === '') {
        filteredList = persons.concat()
    } else {
        persons.forEach(filteredPerson => {
            if (filteredPerson.name.toUpperCase().includes(newSearch.toUpperCase())) {
                filteredList.push(filteredPerson)
            }
        })
    }

    return (
        <div>
            {filteredList.map((person, i) => 
                <li key={i}>
                    {person.name} {person.number} 
                    <button onClick={() => 
                        deletePerson(person)}>delete</button>
                </li>)}
        </div>
    )
}
export default Persons