import { applyMiddleware, compose } from 'redux';
// import logger from 'redux-logger';

const composeEnhancer = compose;

export default composeEnhancer(applyMiddleware());
