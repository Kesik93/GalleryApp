import React, { useState, useEffect } from 'react';
import './Photo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faArrowAltCircleDown, faEye } from '@fortawesome/free-solid-svg-icons';
import fetchStatistics from '../../api/fetchStatistics';
import fetchPhotoTags from '../../api/fetchPhotoTags';


function Photo(props) {
    const [stats, setStats] = useState({
        download: 0,
        view: 0,
        like: 0,
    });
    const [tags, setTags] = useState([])

    useEffect(() => { 
        fetchStatistics(props.photo.id)
            .then(statsData => {
                console.log(statsData)
                setStats({...stats, 
                    download: statsData.downloads.total,
                    view: statsData.views.total,
                    like: statsData.likes.total,
                });
            });

        fetchPhotoTags(props.photo.id)
            .then(dataTags => {
                if(dataTags.tags.length > 0) {
                    setTags(dataTags.tags);
                }
            })
    });

    return (
        <div className='photo'>
            <img src={props.photo.urls.small} className='photo__img' alt='photo'/>
            <h3>{props.photo.description}</h3>
            <div className='photo__icons'>
                <FontAwesomeIcon icon={faThumbsUp} className='photo__icon'/>{stats.like}
                <FontAwesomeIcon icon={faArrowAltCircleDown} className='photo__icon'/>{stats.download}
                <FontAwesomeIcon icon={faEye} className='photo__icon'/>{stats.view}
            </div>
            <div className="photo__tags">
                {tags.slice(0, 3).map((item) => (
                    <button className='photo__tagButton'>#{item?.title}</button>
                ))}
            </div>
        </div>
    )
}

export default Photo;
