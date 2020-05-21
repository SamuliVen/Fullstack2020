import React from 'react'

const Persons = ({ persons, newSearch }) => {
    let filteredList = []
    if(newSearch === '') {
        filteredList = persons.concat()
    } else {
        persons.forEach(filteredPerson => {
            if(filteredPerson.name.toUpperCase().includes(newSearch.toUpperCase())) {
                filteredList.push(filteredPerson)
            }
        })
    }

    return (
        <div>

            {filteredList.map(person =>
                <li key={person.id}>
                    {person.name} {person.number}
                </li>
            )}

        </div>
    )
}
export default Persons