import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';

import { handleInitialData } from '../actions/index';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    const { loading } = this.props;
    return (
      <div>
        <Fragment>
          <LoadingBar />
          {loading.default === 1
            ? <p>Loading...</p>
            : <div>Post index</div>
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
