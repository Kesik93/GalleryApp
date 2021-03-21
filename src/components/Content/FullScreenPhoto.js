import React from 'react';
import './FullScreenPhoto.css';

function FullScreenPhoto({ selectedImg, setSelectedImg }) {
    const handleClick = (event) => {
        setSelectedImg(null);
    }
    return (
        <div className="fullscreenphoto" onClick={handleClick}>
            <img src={selectedImg} alt="full screen"/>
        </div>
    )
}

export default FullScreenPhoto
