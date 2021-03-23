import React from 'react';
import Photo from './Photo';
import './Photos.css';
import InfiniteScroll from 'react-infinite-scroll-component';

function Photos( {results, searchingText, setSelectedImg, onSearch, tagClick} ) {
    return (
        <div className='photos'>
            {/* <InfiniteScroll
                dataLength={results.length}
                next={onSearch(searchingText)}
                hasMore={true}
            > */}
                {results.map((singlePhoto) => (
                    <div className="photos__singlePhoto" key={singlePhoto.id} >
                        <Photo 
                            photo={singlePhoto} 
                            searchingText={searchingText} 
                            setSelectedImg={setSelectedImg}
                            tagClick={tagClick}/>
                    </div>
                ))}
            {/* </InfiniteScroll> */}
        </div>
    )
};

export default Photos
