// import './App.css';
import { useEffect, useState } from 'react';

import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';

import GamesList from './components/GamesList';
import GameBoard from './components/GameBoard';

function App() {
  const [game, setGame] = useState();
  const [gamesList, setGamesList] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      axios.get('http://localhost:3000/games/getGames')
        .then((response) => setGamesList(response.data));
      setIsLoading(true);
    }
  }, [])

  if (!game && !gamesList) {
    return (
      <Container maxWidth="sm">
        <CircularProgress />
      </Container>)
  }

  return (
    <>
      <Container maxWidth="sm">
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
