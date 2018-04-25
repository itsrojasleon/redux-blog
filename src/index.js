import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PostsIndex from './components/posts-index';

import store from './store';

// CSS imported
import './css/index.styl';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" exact component={PostsIndex} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
