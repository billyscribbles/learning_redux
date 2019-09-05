import React from 'react'
import logo from './logo.svg'
import './App.css'

import Posts from './components/Posts'
import Postform from './components/Postform'

//Redux imports

//Wrap your entire react app with the provoider it is the glue for react + redux
import { Provider } from 'react-redux'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1> Learning Redux</h1>
        </header>
        <Postform />
        <hr />
        <Posts />
      </div>
    </Provider>
  )
}

export default App

/**Installing redux
 * npm install redux react-redux redux-thunk --save
 */

/**Understanding redux with https://www.youtube.com/watch?v=93p3LxR9xfM
 *
 *
 * STORE THE STATE IN THE STORE
 * ---------------------------- APP LEVEL ----------------------------
 * We wrap our entire app in a PROVIDER
 * The provider as a STORE property which is the entire "state tree" of your application.
 * The only way you can change the state inside a store, is to DISPATCH an ACTION to it
 *
 * ---------------------------- COMPONENT LEVEL ----------------------------
 * We want to call our fetchPost() function that lives inside ACTIONS
 * To ACCESS ACTIONS: fetchpost() we pass in fetchPost using "CONNECT" and importing the function from ACTIONS
 * "Connect" allows us to access fetchPost() with this.props
 *
 * ---------------------------- ACTION LEVEL ----------------------------
 * Calling fetchPost will return a value to "DISPATCH" here using arrow functions
 * We do our typical fetch, pass response as json, pass data to our dispatch function
 * The dispatch function will accept an object which will have a TYPE (access key) and the PAYLOAD (data)
 *
 * ---------------------------- REDUCER LEVEL ----------------------------
 * With the "dispatch" function it will MAP the TYPE with the postReducer FUNCTION
 * It will match the TYPE to the case and return the current state and store the payload(data) as a STATE
 * The rootReducer, or index will map all the reducers value in a combined reducer
 *
 * ---------------------------- STORE LEVEL ----------------------------
 * The store will create a store that will contain the rootReducer and the intialState
 * Also this is where the redux chrome extension will check and see all our data
 *
 *
 * ACCESSING THE STATE IN THE STORE
 * ---------------------------- COMPONENT LEVEL ----------------------------
 * Instead of this.state.xyz we access it via "props" because its being passed down by our provider
 * To access the provider we use connect() which will passs in a function called mapStatetoProps
 * mapStateToProps will allow us refer to the index "REDUCER" using states
 * We will access the mapping of our postReducer whichi is state.posts (this could be anything we named in index reducer as a key)
 * We only want the items, so we assign state.posts.items to post
 *
 * Once mapped we can access this state using this.props
 * Example: this.props.post will return the entire array of post found inside the store
 */
