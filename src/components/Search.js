import React from 'react';
import './Search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Search() {
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div className='search'>
            <form onSubmit={handleSubmit}>
                <FontAwesomeIcon icon={faSearch} className='search__icon'/>
                <input className='search__input' type="text" placeholder="Type something..." />
                <button className='search__button'>Search</button>
            </form>
        </div>
    )
}

export default Search;
