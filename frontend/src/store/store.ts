import { createStore } from 'redux'
import { searchReducer } from './reducers/exampleReducer'

export const store = createStore(searchReducer)
