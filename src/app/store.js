import { configureStore } from '@reduxjs/toolkit'
import gamesReducer from '../features/games/gamesSlice.ts'

export const store = configureStore({
  reducer: {
    games: gamesReducer,
  },
})