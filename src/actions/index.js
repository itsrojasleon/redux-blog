import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';

const API_KEY = '?key=PAPERCLIP1234';
const BASE_URL = 'https://reduxblog.herokuapp.com/api';

export const fetchPosts = () => {
  const request = axios.get(`${BASE_URL}/posts`);
  return {
    type: FETCH_POSTS,
    payload: request,
  };
};
export const createPost = (values, callback) => {
  const request = axios.post(`${BASE_URL}/posts`, values)
    .then(() => callback());
  return {
    type: CREATE_POST,
    payload: request,
  };
};
export function fetchPost(id) {
  const request = axios.get(`${BASE_URL}/posts/${id}`);
  return {
    type: FETCH_POST,
    payload: request,
  };
}
export function deletePost(id, callback) {
  const request = axios.delete(`${BASE_URL}/posts/${id}`)
    .then(() => callback());
  return {
    type: DELETE_POST,
    payload: id,
  };
}
