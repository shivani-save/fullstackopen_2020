import React from "react";

const Filter = ({searchName, handleSearch}) => {
    return (
        <div>
            Search for country: 
            <input value={searchName} onChange={event => handleSearch(event)}/>
        </div>
    )
}

export default Filter;