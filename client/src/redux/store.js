import { createStore, applyMiddleware , compose } from 'redux';
import { middlewares } from 'redux/middlewares'
import { rootReducer } from 'redux/rootReducer'
export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
