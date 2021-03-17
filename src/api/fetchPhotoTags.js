import apiUnsplash from './apiUnsplash';

const fetchPhotoTags = (id) =>
    apiUnsplash(`/photos/${id}`)

export default fetchPhotoTags;