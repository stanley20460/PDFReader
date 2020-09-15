import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import monitorReducersEnhancer from '../middleware/monitorReducer'
import logger from '../middleware/listerner'
import listerner from '../middleware/listerner'
import rootReducer from '../reducers'

export default function configureStore(preloadedState) {
  const middlewares = [logger, listerner, thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
  const composedEnhancers = compose(...enhancers)

  const store = createStore(rootReducer, preloadedState, composedEnhancers)
  
  if(module.hot){
    module.hot.accept('../reducers', () => store.replaceReducer(rootReducer))
  }

  return store
}