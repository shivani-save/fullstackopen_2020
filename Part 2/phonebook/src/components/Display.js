import React from "react";

const Display = ({persons, searchName}) => {
    return (
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
    )
}

export default Display;