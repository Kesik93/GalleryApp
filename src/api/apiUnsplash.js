import { UNSPLASH_BASE_URL, UNSPLASH_COMMON_HEADERS } from '../constant.js';

const options = {
    headers: UNSPLASH_COMMON_HEADERS
}

const apiUnsplash = url => fetch(`${UNSPLASH_BASE_URL}${url}`, options)
    .then(response => response.json());

export default apiUnsplash;