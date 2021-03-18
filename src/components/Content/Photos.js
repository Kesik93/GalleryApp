import React, { useState, useEffect } from 'react';
import Photo from './Photo';
import './Photos.css';
import fetchPhoto from '../../api/fetchPhoto';

function Photos(props) {
    const [result, setResult] = useState([]);

    useEffect(() => {
        fetchPhoto(props.text)
        .then(data => {
            setResult(data.results);
        })
    }, []);

    return (
        <div className='photos'>
            {result.map((singlePhoto) => (
                    <div key={singlePhoto.id}>
                        <Photo photo={singlePhoto}/>
                    </div>
                ))}
        </div>
    )
}

export default Photos
