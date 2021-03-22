import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import Photos from './components/Content/Photos';
import fetchPhoto from './api/fetchPhoto';
import fetchRandomPhoto from './api/fetchRandomPhoto';
import './App.css';
import FullScreenPhoto from './components/Content/FullScreenPhoto';

function App() {
  const [state, setState] = useState({
    results: [],
    searchingText: '',
    searchingTimes: 0,
  });
  const [selectedImg, setSelectedImg] = useState(null);  // to chyba da sie wrzucic w jednego state
  const [random, setRandom] = useState([]); // to bedzie prawdopodobnie do usuniecia

  const onSearch = async (text) => {
    await fetchPhoto(text)
      .then((data) => {
        setState(prevState => {
          return { ...prevState, 
            results: data.results, 
            searchingText: text, 
            searchingTimes: state.searchingTimes +1}
        })
      })
  };

  const getDefaultPhotos = async () => {
    await fetchRandomPhoto()
      .then(data => {
        setState(prevState => {
          return { ...prevState, 
            results: data,
        }})
        console.log(data)
      })
  }

  const differentViewThanSearch = () => {
    if(state.searchingTimes === 0) {
      getDefaultPhotos();
    } else {
      return <div className='content__text'>Sorry, there are no such photos in our database</div>
    }
  }

  return (
    <>
      <div className='content'>
        <Search onSearch={onSearch}/>
        {
          (state.results && state.results.length > 0) ? 
            <Photos results={state.results} 
              searchingText={state.searchingText} 
              setSelectedImg={setSelectedImg}/> 
            : differentViewThanSearch()
        }
      </div>
      { selectedImg && <FullScreenPhoto selectedImg={selectedImg} setSelectedImg={setSelectedImg}/> }
    </>
  );
}

export default App;
