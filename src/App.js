// import './App.css';
import { useEffect, useState } from 'react';

import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import apiService from './services/api.ts';

import GamesList from './components/GamesList';
import GameBoard from './components/GameBoard';

import { useSelector, useDispatch } from 'react-redux'
import { setLoaded } from './features/games/gamesSlice.ts';

function App() {
  const [game, setGame] = useState();
  const [gamesList, setGamesList] = useState();
  const [hasError, setError] = useState();

  const isLoading = useSelector((state) => state.games.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoading) {
      apiService.getGames()
        .then(data => setGamesList(data))
        .catch(error => setError(error.message));

      dispatch(setLoaded(true));
    }
  }, [dispatch, isLoading])

  if (hasError) {
    return <>{hasError}</>
  }

  if (!game && !gamesList) {
    return (
      <Container maxWidth="sm">
        <CircularProgress />
      </Container>)
  }

  return (
    <>
      <Container maxWidth="sm" sx={{ p: 1}}>
        {game ?
          <GameBoard
            game={game}
            onClose={() => setGame()}
            onChange={setGame}
          />
          :
          <GamesList
            list={gamesList}
            onChange={setGame}
          />}
      </Container>
    </>
  );
}

export default App;
