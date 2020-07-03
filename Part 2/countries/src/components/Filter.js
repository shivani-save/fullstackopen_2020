import React from "react";

const Filter = ({searchName, handleSearch}) => {
    return (
        <div>
            Search for country: 
            <input value={searchName} onChange={handleSearch}/>
        </div>
    )
}

export default Filter;