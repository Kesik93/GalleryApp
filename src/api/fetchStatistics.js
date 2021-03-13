import apiUnsplash from './apiUnsplash';

const fetchStatistics = (id) =>
    apiUnsplash(`/photos/${id}/statistics`)

export default fetchStatistics;