import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class PostsNew extends Component {
  renderField = (field) => {
    const { touched, error } = field.meta;
    const className = `${touched && error ? 'red' : ''}`;
    return (
      <div style={{ color: className }}>
        <label>{field.label}</label>
        <input
          type="text"
          {...field.input}
        />
        <div>{touched ? error : ''}</div>
      </div>
    );
  }

  onSubmit = (values) => {
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field
          name="title"
          label="Title"
          component={this.renderField}
        />
        <Field
          name="categories"
          label="Categories"
          component={this.renderField}
        />
        <Field
          name="content"
          label="Post content"
          component={this.renderField}
        />
        <button type="submit">Submit</button>
        <Link to="/">Cancel</Link>
      </form>
    );
  }
}
function validate(values) {
  const errors = {};
  if (!values.title) {
    errors.title = 'Enter a title';
  }
  if (!values.categories) {
    errors.categories = 'Enter some categories';
  }
  if (!values.content) {
    errors.content = 'Enter some content please';
  }
  return errors;
}
export default reduxForm({
  validate,
  form: 'PostNewForm',
})(PostsNew);
