// import './App.css';
import { useEffect, useState } from 'react';

import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import apiService from './services/api.ts';

import GamesList from './components/GamesList';
import GameBoard from './components/GameBoard';

function App() {
  const [game, setGame] = useState();
  const [gamesList, setGamesList] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setError] = useState();

  useEffect(() => {
    if (!isLoading) {
      apiService.getGames()
        .then(data => setGamesList(data))
        .catch(error => setError(error.message));
      setIsLoading(true);
    }
  }, [isLoading])

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
