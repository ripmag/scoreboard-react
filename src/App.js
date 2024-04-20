// import './App.css';
import { useState } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import GamesList from './components/GamesList';
import GameBoard from './components/GameBoard';


const list = [{ id: 1 }, { id: 2 }]

function App() {
  const [game, setGame] = useState();
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        {game ?
          <GameBoard
            game={game}
            onClose={() => setGame()}
          />
          :
          <GamesList
            list={list}
            onChange={setGame}
          />}
      </Container>
    </>
  );
}

export default App;
