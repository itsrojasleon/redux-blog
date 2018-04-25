import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
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
