export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
import axios from 'axios';
const API_KEY = '?key=PAPERCLIP1234';
const BASE_URL = 'https://reduxblog.herokuapp.com/api';

export const fetchPosts = () => {
  return axios.get(`${BASE_URL}/posts`)
    .then(posts => posts.json());
};
export const createPostApi = (values) => {
  return axios.post(`${BASE_URL}/posts`, values)
    .then(posts => posts.json());
};
