import React, { useState } from 'react';
import Search from './components/Search';
import Photos from './components/Content/Photos';

function App() {
    const [query, setQuery] = useState('');
    const [text, setText] = useState('');


    const handleSubmit = (event) => {
      event.preventDefault();
      setText(query);
      console.log(text);
    }

    const handleQuery = event => {
      setQuery(event.target.value);
    };

  return (
    <div className='content'>
      <Search query={query} handleQuery={handleQuery} handleSubmit={handleSubmit}/>
      <Photos text={text}/>
    </div>
  );
}

export default App;
