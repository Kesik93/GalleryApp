import React from 'react';
import Photo from './Photo';
import './Photos.css';
import InfiniteScroll from 'react-infinite-scroll-component';

function Photos( {results, searchingText, setSelectedImg, onSearch} ) {
    return (
        <div className='photos'>
            {results.map((singlePhoto) => (
                <div className="photos__singlePhoto" key={singlePhoto.id} >
                    <Photo photo={singlePhoto} searchingText={searchingText} setSelectedImg={setSelectedImg}/>
                </div>
            ))}
        </div>
    )
};

export default Photos
