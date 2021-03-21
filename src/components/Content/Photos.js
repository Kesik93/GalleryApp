import React from 'react';
import Photo from './Photo';
import './Photos.css';

function Photos( {results, searchingText, setSelectedImg} ) {
    return (
        <div className='photos'>
            {results.map((singlePhoto) => (
                <div className="photos__singlePhoto" key={singlePhoto.id} >
                    <Photo photo={singlePhoto} searchingText={searchingText} setSelectedImg={setSelectedImg}/>
                </div>
            ))}
        </div>
    )
}

export default Photos
