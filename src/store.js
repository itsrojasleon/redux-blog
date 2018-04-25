import { createStore } from 'redux';
import reducers from './reducers/index';
import composeEnhancer from './middleware/index';

const store = createStore(reducers, composeEnhancer);

export default store;
