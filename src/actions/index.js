import { showLoading, hideLoading } from 'react-redux-loading';
import { fetchPosts } from '../utils/api';
import { receivePosts } from './receivePosts';

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return fetchPosts()
      .then((posts) => {
        dispatch(receivePosts(posts));
        dispatch(hideLoading());
      });
  };
}
