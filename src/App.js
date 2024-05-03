// import './App.css';
import { useEffect, useState } from 'react';

import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';

import GamesList from './components/GamesList';
import GameBoard from './components/GameBoard';

import { useSelector, useDispatch } from 'react-redux'
import { getGamesList } from './features/games/gamesSlice.ts';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout.js';

function App() {
  const [game, setGame] = useState();

  const list = useSelector((state) => state.games.list);
  const isReady = useSelector((state) => state.games.isReady);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGamesList());
  }, [])


  if (!isReady) {
    return (
      <Container maxWidth="sm">
        <CircularProgress />
      </Container>)
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<GamesList />} />
          <Route path='/game/:id' element={<GameBoard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
