import apiUnsplash from './apiUnsplash';

const fetchPhoto = (query) =>
    apiUnsplash(`/search/photos?query=${query}&per_page=10&page=0`)

export default fetchPhoto;