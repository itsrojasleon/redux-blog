import _ from 'lodash';
import { RECEIVE_POSTS } from '../actions/receivePosts';

export default function (state = {}, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return _.mapKeys(action.posts, 'id');
    default:
      return state;
  }
}
