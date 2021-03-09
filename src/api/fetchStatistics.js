import apiUnsplash from './apiUnsplash';

const fetchStatistics = (id) =>
    apiUnsplash(`/photos?id=${id}/statistics`) //TODO: sprawdzić czy to w ogole działa

export default fetchStatistics;