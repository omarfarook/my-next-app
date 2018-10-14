import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducer';

const middleware = applyMiddleware(
  thunk
)

export const initializeStore = (initialState, options) => {
  return createStore(rootReducer, initialState, composeWithDevTools(middleware))
}
