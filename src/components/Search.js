import React from 'react';
import './Search.css';

function Search() {
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div className='search'>
            <form onSubmit={handleSubmit}>
                <input className='search__input' type="text" placeholder="Search..." />
                <button className='search__button'>Search</button>
            </form>
        </div>
    )
}

export default Search;
