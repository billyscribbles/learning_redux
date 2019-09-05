import React, { Component } from 'react'
import PropTypes from 'prop-types'

//The provider that is being wrapped around our app, we can connect to that provider using "connect"
import { connect } from 'react-redux'

//Pass our action functions to our component
import { fetchPosts } from '../actions/postActions'

class Posts extends Component {
  //In redux we want to replace this constructor with a store
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     posts: []
  //   }
  // }

  //When a new PROPERTY is recieved from the state this will RUN
  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost)
    }
  }

  componentDidMount() {
    console.log('This will run immediately when component mounts')

    //We will fetch our data and save in our post state
    // fetch('http://jsonplaceholder.typicode.com/posts')
    //   .then(res => res.json())
    //   .then(data =>
    //     this.setState({
    //       posts: data
    //     })
    //   )

    //WE WILL NO LONGER NEED TO FETCH HERE AS WE ARE NOW MOVING IT TO ACTIONS AND PASTE IT INTO OUR FUNCTION

    //Data format
    //   {
    //     "userId": 1,
    //     "id": 1,
    //     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    //     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    //   }

    //Again we call our fetchPost() function ACTION now derived from connect using this.props

    //REDUX LIFE CYCLE

    //We call the fetchPost() function derived from "connect" which is an ACTION
    //Once we call the ACTION it will return a DISPATCH to call the REDUCER
    //From the REDUCER it is returning the STATE with the ITEM being fetched to the STORE
    //Note: that there are many reducer, we store our postReducer inside index with key "posts" which will store our STATE AND ITEM
    //Now we simply need to grab our values from our STORE
    //Using mapStatetoProps
    this.props.fetchPosts()
  }

  //HOW TO GET DATA FROM THE STORE:

  render() {
    //Here we declare a variable called "post" which will represent each object in "posts"

    //TO ACCESS the post because we have mapped our state to props now, we can simply call this.props
    // const postItems = this.state.posts.map(post => (
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ))

    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    )
  }
}

Posts.propType = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  post: PropTypes.object.isRequired
}

//We need to map this to connect, so we can use "this.props" instead of this.state
const mapStateToProps = state => ({
  //In our index we mapped the postReducer return value to "posts" inside index
  //We want our "items" declared in the reducer, which is what we are going to put in our "posts" property in mapState

  posts: state.posts.items,

  //HERE IS WHERE THE MAGIC IS: ONE SINGLE SOURCE OF TRUTH WHERE WE CAN ACCESS ANY STATE
  newPost: state.posts.item
})

export default connect(
  mapStateToProps,
  { fetchPosts }
)(Posts)
