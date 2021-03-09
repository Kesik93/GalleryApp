import React, { useState, useEffect } from 'react';
import Photo from './Photo';
import './Photos.css';
import fetchPhoto from '../../api/fetchPhoto';

function Photos() {
    const [result, setResult] = useState([]);

    useEffect(() => {
        fetchPhoto('cat') //TODO do zahardkodowania
        .then(data => {
            setResult(data.results);
        })
    });

    return (
        <div className='photos'>
            {result.map((results) => (
                    <div>
                        <Photo photo={results}/>
                    </div>
                ))}
        </div>
    )
}

export default Photos
