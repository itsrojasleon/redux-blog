import { applyMiddleware, compose } from 'redux';
import promise from 'redux-promise';
// import logger from 'redux-logger';

const composeEnhancer = compose;

export default composeEnhancer(applyMiddleware(promise));
