import React from 'react';
import Photo from './Photo';
import './Photos.css';

function Photos( {results, searchingText} ) {
    return (
        <div className='photos'>
            {results.map((singlePhoto) => (
                <div key={singlePhoto.id}>
                    <Photo photo={singlePhoto} searchingText={searchingText}/>
                </div>
            ))}
        </div>
    )
}

export default Photos
