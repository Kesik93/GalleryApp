import React from 'react';
import Photo from './Photo';
import './Photos.css';

function Photos( {results} ) {
    return (
        <div className='photos'>
            {results.map((singlePhoto) => (
                    <div key={singlePhoto.id}>
                        <Photo photo={singlePhoto}/>
                    </div>
                ))}
        </div>
    )
}

export default Photos
