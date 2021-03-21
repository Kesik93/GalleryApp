import apiUnsplash from './apiUnsplash';

const fetchRandomPhoto = (query) =>
    apiUnsplash(`/photos/random?count=9`)

export default fetchRandomPhoto;