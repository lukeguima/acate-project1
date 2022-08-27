import {
  configureStore
} from '@reduxjs/toolkit';

import { 
  combineReducers 
} from 'redux'

import favoriteData from "./modules/favorite/reducer"

const rootReducers = combineReducers({
  favorite: favoriteData
})

const store = configureStore({
  reducer: rootReducers
})

export default store;