import React from "react";

const Display = ({countries, searchName}) => {
    return (
        <div>
        <ul>
          {countries.filter(country => country.name.toLowerCase().includes(searchName.toLowerCase()))
                .map(country => (
                    <li key={country.name}>
                        {country.name} 
                    </li>
                ))}
        </ul>
      </div>
    )
}

export default Display;