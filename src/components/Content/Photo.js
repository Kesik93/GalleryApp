import React, { useState, useEffect } from 'react';
import './Photo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faArrowAltCircleDown, faEye } from '@fortawesome/free-solid-svg-icons';
import fetchStatistics from '../../api/fetchStatistics';
import fetchPhotoTags from '../../api/fetchPhotoTags';

function Photo( { photo, searchingText, setSelectedImg } ) {
    const [photoInfo, setPhotoInfo] = useState({
        download: 0,
        view: 0,
        like: 0,
        tags: [],
    });

    useEffect(() => { 
        fetchStatistics(photo.id)
            .then(statsData => {
                setPhotoInfo({...photoInfo, 
                    download: statsData.downloads.total,
                    view: statsData.views.total,
                    like: statsData.likes.total,
                });
            });

        fetchPhotoTags(photo.id)
            .then(dataTags => {
                if(dataTags.tags.length > 0) {
                    setPhotoInfo({...photoInfo, 
                        tags: dataTags.tags,
                    });
                }
            })
    }, []);

    return (
        <div className='photo'>
            <img src={photo.urls.small} 
                className='photo__img' 
                key={photo.id} 
                alt={photo.id}
                onClick={() => setSelectedImg(photo.urls.full)}/>
            <h3>{photo.description || searchingText}</h3>
            <div className='photo__icons'>
                <FontAwesomeIcon icon={faThumbsUp} className='photo__icon'/>{photoInfo.like}
                <FontAwesomeIcon icon={faArrowAltCircleDown} className='photo__icon'/>{photoInfo.download}
                <FontAwesomeIcon icon={faEye} className='photo__icon'/>{photoInfo.view}
            </div>
            <div className="photo__tags">
                {photoInfo.tags.length > 0 ? (photoInfo.tags.slice(0, 3).map((item) => (
                    <button className='photo__tagButton' key={item.title}>#{item.title}</button>
                ))) : <button className='photo__tagButton' key='test'>#{searchingText || 'radom'}</button>}
            </div>
        </div>
    )
}

export default Photo;
