import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading';
import { reducer as formReducer } from 'redux-form';
import postReducer from './postReducer';

export default combineReducers({
  posts: postReducer,
  loadingBar: loadingBarReducer,
  form: formReducer,
});
