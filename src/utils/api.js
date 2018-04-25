const API_KEY = '?key=PAPERCLIP1234';
const BASE_URL = 'https://reduxblog.herokuapp.com/api';

export const fetchPosts = () => {
  return fetch(`${BASE_URL}/posts`)
    .then(posts => posts.json());
};
