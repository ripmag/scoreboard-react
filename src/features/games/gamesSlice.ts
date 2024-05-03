import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import apiService from '../../services/api.ts'
import { IApiResponse } from '../../services/api.ts'

export const getGamesList = createAsyncThunk(
  'games/getGames',
  async (_, thunkAPI) => {
    return await apiService.getGames();
  },
)

export const addPointTeam1 = createAsyncThunk(
  'games/addPointTeam1',
  async (id: number, thunkAPI) => {    
    return await apiService.post('addPointTeam1', id);
  },
)

export const addPointTeam2 = createAsyncThunk(
  'games/addPointTeam2',
  async (id: number, thunkAPI) => {    
    return await apiService.post('addPointTeam2', id);
  },
)

interface StateType {
  list: IApiResponse[];
  gameId: number;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed',
  isReady: boolean,
}

const initialState: StateType = {
  list: [],
  gameId: 0,
  loading: 'idle',
  isReady: false,
}

export const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setLoaded: (state) => {
      state.loading = 'succeeded';
      state.isReady = true;
    },
    setLoading: (state) => {
      state.loading = 'pending';
    },
    setGameId: (state, action) => {
      state.gameId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getGamesList.fulfilled, (state, action) => {
      state.list = action.payload;
      state.isReady = true;
    })
    builder.addCase(addPointTeam1.fulfilled, (state, action) => {
      const id = action.meta.arg;
      const gameIndex = state.list.findIndex(item => item.id === +id);
      if (gameIndex !== -1) {
        state.list[gameIndex] = action.payload;
      }
    })
    builder.addCase(addPointTeam2.fulfilled, (state, action) => {
      const id = action.meta.arg;
      const gameIndex = state.list.findIndex(item => item.id === +id);
      if (gameIndex !== -1) {
        state.list[gameIndex] = action.payload;
      }
    })
  },
})

// Action creators are generated for each case reducer function
export const { setLoaded, setLoading } = gamesSlice.actions

export default gamesSlice.reducer