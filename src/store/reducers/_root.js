import storage from 'redux-persist/lib/storage/index'

import { persistReducer } from 'redux-persist'
import { combineReducers } from 'redux'

import configReducer from './config'

const persistedConfigReducer = persistReducer({ 
  key: 'config', 
  storage: storage 
}, configReducer)

const rootReducer = combineReducers({
  config: persistedConfigReducer,
})

export default rootReducer