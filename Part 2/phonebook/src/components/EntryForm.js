import React from "react";

const EntryForm = ({newName, handleNewName, newNumber, handleNewNumber, addEntry}) => {
    return (
        <form onSubmit={addEntry}>
            <div>
                Name: <input value={newName} onChange={event => handleNewName(event)} 
                />
            </div>
            <div>
                Number: <input value={newNumber} onChange={event => handleNewNumber(event)} 
                />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    );
};

export default EntryForm;