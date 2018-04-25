import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/index';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    console.log(this.props.posts);
    return (
      <div>Post index</div>
    );
  }
}
function mapStateToProps(state) {
  return {
    loading: state.loading,
    posts: state.posts,
  };
}
export default connect(mapStateToProps)(PostsIndex);
