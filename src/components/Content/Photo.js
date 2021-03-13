import React, { useState, useEffect } from 'react';
import './Photo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faArrowAltCircleDown, faEye } from '@fortawesome/free-solid-svg-icons';
import fetchStatistics from '../../api/fetchStatistics';

function Photo(props) {
    const [stats, setStats] = useState({
        download: 0,
        view: 0,
        like: 0,
    });

    useEffect(() => { 
        fetchStatistics(props.photo.id)
            .then(data => {
                console.log(data);
                setStats({...stats, 
                    download: data.downloads.total,
                    view: data.views.total,
                    like: data.likes.total,
                });
                
            })
    });

    return (
        <div className='photo'>
            <img src={props.photo.urls.small} className='photo__img'/>
            <h3>{props.photo.description}</h3>
            <div className='photo__icons'>
                <FontAwesomeIcon icon={faThumbsUp} className='photo__icon'/>{stats.like}
                <FontAwesomeIcon icon={faArrowAltCircleDown} className='photo__icon'/>{stats.download}
                <FontAwesomeIcon icon={faEye} className='photo__icon'/>{stats.view}
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
