import React from "react";

const Display = ({searchName, countries, handleSearch}) => {

    const filt = countries.filter(c => c.name.toLowerCase().includes(searchName.toLowerCase()));

    return (
        <div>
            {
                filt.length > 10 ?
                <p>Too many matches, specify another filter.</p>
                :
                filt.length === 1 ?
                <div>
                    <h1>{filt[0].name}</h1>
                    <p>Capital: {filt[0].capital}</p>
                    <p>Population: {filt[0].population}</p>
                    <h2>Languages</h2>
                    <ul>
                    {
                        filt[0].languages.map(language => <li key={language.name}>{language.name}</li>)
                    }
                    </ul>
                    <img src={filt.flag} alt='Flag' style={{width: 150, height: 150}} />
                </div>
                :
                <ul style={{listStyle: 'none', padding: 0}}>
                    {
                        filt.map(result => (
                            <li key={result.name}>
                                {result.name} <button onClick={event => handleSearch(event)}>Show</button>
                            </li>
                        ))
                    }
                </ul>
            }
        </div>
    );
};


export default Display;