import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    const { posts } = this.props;
    return (
      <div>
        <Fragment>
          {!posts
            ? <div>Loading inital data...</div>
            : <div>
                <Link to="/posts/new">
                  Add a Post
                </Link>
                <h2>Posts</h2>
                <ul>
                  {
                    _.map(this.props.posts, (post) => {
                      return <li key={post.id}>{post.title}</li>;
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
  };
}
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
