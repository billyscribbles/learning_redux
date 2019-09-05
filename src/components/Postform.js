import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createPost } from '../actions/postActions'

class Postform extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: ''
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  //Create a universal onChange function and just use the name and target variables
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  //On submit we create the post and use fetch to create a POST request, and console the response
  onSubmit(e) {
    e.preventDefault()

    const post = {
      title: this.state.title,
      body: this.state.body
    }

    //We will call our ACTION instead
    this.props.createPost(post)
    // fetch('http://jsonplaceholder.typicode.com/posts', {
    //   method: 'POST',
    //   headers: { 'content-type': 'application/json' },
    //   body: JSON.stringify(post)
    // })
    //   .then(res => res.json())
    //   .then(data => console.log(data))
  }

  render() {
    return (
      <div>
        <h1>Add post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title: </label>
            <br />
            <input
              name="title"
              type="text"
              value={this.state.title}
              onChange={this.onChange}
            />
          </div>
          <br />
          <div>
            <label>Body: </label>
            <br />
            <textarea
              name="body"
              type="text"
              value={this.state.body}
              onChange={this.onChange}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

Postform.propTypes = {
  createPost: PropTypes.func.isRequired
}

export default connect(
  null,
  { createPost }
)(Postform)
