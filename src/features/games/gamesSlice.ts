import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import apiService from '../../services/api.ts'
// import { GameDTO } from '../../entities/game-dto';

const getGames = createAsyncThunk(
  'games/getGames',
  async (_ , thunkAPI) => {
    const data = await apiService.getGames()
    return data
  },
)

const initialState = {
  list: [],
  isLoaded: false,
  isLoading: false,
}

export const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setLoaded: (state) => {
      state.isLoaded = true;
      state.isLoading = false;
    },
    setLoading: (state) => {
        state.isLoaded = false;
        state.isLoading = true;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setLoaded, setLoading } = gamesSlice.actions

export default gamesSlice.reducer