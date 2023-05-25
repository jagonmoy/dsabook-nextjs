'use client'
import { configureStore,combineReducers} from '@reduxjs/toolkit'
import userReducer from  './slices/userSlice'
import { apiSlice } from './slices/apiSlice'

const rootReducer : any = combineReducers({
  user: userReducer,
  [apiSlice.reducerPath]: apiSlice.reducer
})

export const store =  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      immutableCheck: false,
      serializablecheck: false,
    }).concat(apiSlice.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch