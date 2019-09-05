import { FETCH_POSTS, NEW_POST } from './types'

//Each action or action creator is going to be a function we need to create

/**
 * The thunk middleware allows us to call the dispatch function directly to make async requests
 */
export const fetchPosts = () => dispatch => {
  //Dispatch: is sort of like a resolver or a promise whenever we want to send data
  //In this case it will be our action "type" or payload "data"
  fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(
      data =>
        // this.setState({
        //   posts: data
        // })
        //We will no longer set the component state, what we want to do is dispatch the data to the reducer
        dispatch({
          type: FETCH_POSTS,
          payload: data
        })
      //We need must delcare the TYPE and pass the data which we will call the payload
    )
}

//We are passing in some post data as an argumenet
export const createPost = postData => dispatch => {
  fetch('http://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: NEW_POST,
        payload: data
      })
    )
}
