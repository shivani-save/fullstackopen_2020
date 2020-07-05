import React from "react";

const Display = ({persons, searchName, handleDelete}) => {
    return (
        <div>
        <ul>
          {persons.filter(person => person.name.toLowerCase().includes(searchName.toLowerCase()))
                .map(person => (
                    <li key={person.name}>
                        {person.name} {person.number}
                        <button onClick={() => handleDelete(person)}>delete</button>
                    </li>
                ))}
        </ul>
      </div>
    )
}

export default Display;