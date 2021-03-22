import apiUnsplash from './apiUnsplash';

const fetchRandomPhoto = () =>
    apiUnsplash(`/photos/random?count=9`)

export default fetchRandomPhoto;