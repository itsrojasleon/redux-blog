import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading';
import postReducer from './postReducer';

export default combineReducers({
  posts: postReducer,
  loading: loadingBarReducer,
});
