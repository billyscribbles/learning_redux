//This is our root reducer that we will input into our store

//Here we will combine all our reducers
import { combineReducers } from 'redux'
import postReducers from './postReducer'

export default combineReducers({
  posts: postReducers
})
