import apiUnsplash from './apiUnsplash';

const fetchRandomPhoto = () =>
    apiUnsplash(`/photos/random?count=10`)

export default fetchRandomPhoto;