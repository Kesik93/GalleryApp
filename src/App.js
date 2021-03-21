import React, { useState } from 'react';
import Search from './components/Search';
import Photos from './components/Content/Photos';
import fetchPhoto from './api/fetchPhoto';

function App() {
  const [state, setState]  = useState({
    results: [],
    searchingText: '',
  });

  const onSearch = async (text) => {
    const results = await fetchPhoto(text)
      .then(data => {
        setState(prevState => {
          return { ...prevState, results: data.results, searchingText: text }
        });
      });
  };

  return (
    <div className='content'>
      <Search onSearch={onSearch} />
      <Photos results={state.results} searchingText={state.searchingText}/>
    </div>
  );
}

export default App;
