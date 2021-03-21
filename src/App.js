import React, { useState } from 'react';
import Search from './components/Search';
import Photos from './components/Content/Photos';
import fetchPhoto from './api/fetchPhoto';
//import fetchRandomPhoto from './api/fetchRandomPhoto';
import './App.css';
import FullScreenPhoto from './components/Content/FullScreenPhoto';

function App() {
  const [state, setState] = useState({
    results: [],
    searchingText: '',
    searchingTimes: 0,
  });
  const [selectedImg, setSelectedImg] = useState(null);
  //const [random, setRandom] = useState([]);

  const onSearch = async (text) => {
    const results = await fetchPhoto(text)
      .then((data) => {
        setState(prevState => {
          return { ...prevState, 
            results: data.results, 
            searchingText: text, 
            searchingTimes: state.searchingTimes +1}
        })
      })
  };

  // const websiteInitial = () => {
  //   const random = fetchRandomPhoto()
  //     .then(data => {
  //       setRandom(data);
  //       console.log(data)
  //     })
  // }

  const informationText = () => {
    const infoText = state.searchingTimes === 0 ? 
      'Enter what you would like to find. Enjoy :)' : 'Sorry, there are no such photos in our database';

    return <div className='content__text'>{infoText}</div>
  }

  return (
    <>
      <div className='content'>
        <Search onSearch={onSearch} />
        {(state.results && state.results.length > 0) ? 
          <Photos results={state.results} searchingText={state.searchingText} setSelectedImg={setSelectedImg}/> : informationText()
        }
      </div>
      {selectedImg && <FullScreenPhoto selectedImg={selectedImg} setSelectedImg={setSelectedImg}/> }
    </>
  );
}

export default App;
