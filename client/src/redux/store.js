import { createStore, applyMiddleware } from 'redux';
import middlewares from 'redux/middlewares';
import { rootReducer } from 'redux/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...middlewares),
  ),
);
