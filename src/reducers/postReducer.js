//This is where we will evaluate any action commited such as getting and posting our posts

import { FETCH_POSTS, NEW_POST } from '../actions/types'

//A REDUCER IS OUR CONSTRUCTOR STATE !!!!

const initialState = {
  //This is going to represent the list of posts that comes in from our action
  items: [],
  //This is going to represent our single post that we will POST
  item: {}
}

//This will evaluate what TYPE we are dealing with,

export default function(state = initialState, action) {
  //We want to see which type is being passed
  switch (action.type) {
    case FETCH_POSTS:
      return {
        //Return the current state
        ...state,
        //Return the data
        items: action.payload
      }
    case NEW_POST:
      return {
        ...state,
        item: action.payload
      }
    default:
      return state
  }
}
