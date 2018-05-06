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
            ? <div className="loading">Loading inital data...</div>
            : <div className="container">
                <div className="header">
                  <h2 className="posts">Posts</h2>
                  <Link className="add-post" to="/posts/new">
                    > Add a Post
                  </Link>
                </div>
                <ul className="posts-list">
                  {
                    _.map(this.props.posts, (post) => {
                      return <li style={{ marginBottom: '40px' }} key={post.id}>
                              <Link className="post-link" to={`/posts/${post.id}`}>{post.title}</Link>
                              <p className="categorie">{post.categories.toUpperCase()}</p>
                              <p className="content">{post.content}</p>
                             </li>;
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
