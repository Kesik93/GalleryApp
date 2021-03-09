import React from 'react';
import './Photo.css';
//import photo from './../../example.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faArrowAltCircleDown, faEye } from '@fortawesome/free-solid-svg-icons';

function Photo(props) {
    return (
        <div className='photo'>
            <img src={props.photo} className='photo__img'/>
            <h3>Description</h3>
            <div className='photo__icons'>
                <FontAwesomeIcon icon={faThumbsUp} className='photo__icon'/>1234
                <FontAwesomeIcon icon={faArrowAltCircleDown} className='photo__icon'/>231
                <FontAwesomeIcon icon={faEye} className='photo__icon'/>4322  
            </div>
            <div className="photo__tags">
                <button className='photo__tagButton'>#cat</button>
                <button className='photo__tagButton'>#pet</button>
                <button className='photo__tagButton'>#animal</button>
            </div>
        </div>
    )
}

export default Photo;
