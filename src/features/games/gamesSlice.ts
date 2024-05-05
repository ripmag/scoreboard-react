import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { unwrapResult } from '@reduxjs/toolkit';
import apiService from '../../services/api.ts'
import { IApiResponse } from '../../services/api.ts'

import { useDispatch } from 'react-redux'

export const getGamesList = createAsyncThunk(
  'games/getGames',
  async (_, thunkAPI) => {
    return await apiService.getGames();
  },
)

export const addPointTeam1 = createAsyncThunk(
  'games/addPointTeam1',
  async ({ id }: FetchDataParams, thunkAPI) => {
    return await apiService.post('addPointTeam1', id);
  },
)

export const deleteGame = createAsyncThunk(
  'games/deleteGame',
  async ({ id }: FetchDataParams, thunkAPI) => {
    const result = await apiService.delete(id);

    if (result) {
      await thunkAPI.dispatch(getGamesList());
    }
    
    return result;
  },
)

export const addPointTeam2 = createAsyncThunk(
  'games/addPointTeam2',
  async ({ id }: FetchDataParams, thunkAPI) => {
    return await apiService.post('addPointTeam2', id);
  },
)

interface FetchDataParams {
  id: number;
  name: string;
}

export const onEditGameName = createAsyncThunk(
  'games/onEditGameName',
  async ({ id, name }: FetchDataParams, thunkAPI) => {
    return await apiService.onEditGameName(id, name);
  },
)

export const onEditTeam1 = createAsyncThunk(
  'games/onEditTeam1',
  async ({ id, name }: FetchDataParams, thunkAPI) => {
    return await apiService.onEditTeam1(id, name);
  },
)

export const onEditTeam2 = createAsyncThunk(
  'games/onEditTeam2',
  async ({ id, name }: FetchDataParams, thunkAPI) => {
    return await apiService.onEditTeam2(id, name);
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
    builder.addCase(getGamesList.fulfilled, (state, action) => {console.log('getGamesList')
      state.list = action.payload;
      state.isReady = true;
    })
    builder.addCase(addPointTeam1.fulfilled, (state, action) => {
      const index = getIndexbyId(state.list, action.payload.id);

      if (index) {
        state.list[index] = action.payload;
      }
    })
    builder.addCase(addPointTeam2.fulfilled, (state, action) => {
      const index = getIndexbyId(state.list, action.payload.id);

      if (index) {
        state.list[index] = action.payload;
      }
    })
    builder.addCase(onEditGameName.fulfilled, (state, action) => {
      const index = getIndexbyId(state.list, action.payload.id);

      if (index) {
        state.list[index] = action.payload;
      }
    })
    builder.addCase(onEditTeam1.fulfilled, (state, action) => {
      const index = getIndexbyId(state.list, action.payload.id);

      if (index) {
        state.list[index] = action.payload;
      }
    })
    builder.addCase(onEditTeam2.fulfilled, (state, action) => {
      const index = getIndexbyId(state.list, action.payload.id);

      if (index) {
        state.list[index] = action.payload;
      }
    })
  },
})

const getIndexbyId = (list: IApiResponse[], id: number) => {
  const gameIndex = list.findIndex(item => item.id === id);
  return (gameIndex === -1) ? 0 : gameIndex;
}

// Action creators are generated for each case reducer function
export const { setLoaded, setLoading } = gamesSlice.actions

export default gamesSlice.reducer