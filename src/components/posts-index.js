import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import LoadingBar from 'react-redux-loading';

import { handleInitialData } from '../actions/index';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    const { loading, posts } = this.props;
    console.log(posts);
    return (
      <div>
        <Fragment>
          <LoadingBar />
          {loading.default === 1
            ? <p>Loading...</p>
            : <div>
                <h2>Posts</h2>
                <ul>
                  {
                    _.map(this.props.posts, (post) => {
                      return <li key={post.id}>{post.id}</li>;
                    })
                  }
                </ul>
              </div>
          }
        </Fragment>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    posts: state.posts,
    loading: state.loadingBar,
  };
}
export default connect(mapStateToProps)(PostsIndex);
