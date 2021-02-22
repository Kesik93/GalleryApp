import React from 'react';
import './Photo.css';
import photo from './../../example.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faArrowAltCircleDown, faEye } from '@fortawesome/free-solid-svg-icons';

function Photo() {
    return (
        <div className='photo'>
            <img src={photo} className='photo-img'/>
            <h3>Description</h3>
            <div>
                <FontAwesomeIcon icon={faThumbsUp} className='photo_icon'/>1234
                <FontAwesomeIcon icon={faArrowAltCircleDown} className='photo_icon'/>231
                <FontAwesomeIcon icon={faEye} className='photo_icon'/>4322  
            </div>
        </div>
    )
}

export default Photo;
