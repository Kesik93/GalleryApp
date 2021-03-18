import React, { useState } from 'react';
import './Search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Search({query, handleQuery, handleSubmit}) {
    //const [query, setQuery] = useState('');

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    // }

    // const handleQuery = event => {
    //     setQuery(event.target.value);
    // };

    return (
        <div className='search'>
            <form onSubmit={handleSubmit}>
                <FontAwesomeIcon icon={faSearch} className='search__icon'/>
                <input className='search__input' type="text" placeholder="Type something..." value={query} onChange={handleQuery} />
                <button className='search__button'>Search</button>
            </form>
        </div>
    )
}

export default Search;
