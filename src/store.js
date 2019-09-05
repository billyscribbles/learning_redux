import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

//If you dont specify the name of the file, it will import the index.js file inside the reducer folder
import rootReducer from './reducers'

const initialState = {}

const middleware = [thunk]

//The store holds the whole "state tree" of your application.
//The only way you can change the state inside a store, is to dispatch an action to it
//https://redux.js.org/api/createstore
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    //To add chrome extension
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store
