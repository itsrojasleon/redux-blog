import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderField = (field) => {
    return (
      <div>
        <label>{field.label}</label>
        <input
          type="text"
          {...field.input}
        />
      </div>
    );
  }

  render() {
    return (
      <form>
        <Field
          name="title"
          label="Title"
          component={this.renderField}
        />
        <Field
          name="tags"
          label="Tag"
          component={this.renderField}
        />
        <Field
          name="content"
          label="Post content"
          component={this.renderField}
        />
      </form>
    );
  }
}
export default reduxForm({
  form: 'PostNewForm',
})(PostsNew);
