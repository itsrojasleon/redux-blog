import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostsIndex from './components/posts-index';
import PostsNew from './components/posts-new';
import PostsShow from './components/posts-show';

import store from './store';

// CSS imported
import './css/index.styl';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={PostsIndex} />
          <Route path="/posts/new" component={PostsNew} />
          <Route exact path="/posts/:id" component={PostsShow} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
