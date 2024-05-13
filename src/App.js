// import './App.css';
import { useEffect } from 'react';

import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';

import GamesList from './components/GamesList';
import GameBoard from './components/GameBoard';

// import { useSelector, useDispatch } from 'react-redux'
// import { getGamesList } from './features/games/gamesSlice.ts';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout.js';

function App() {
  

  // // const list = useSelector((state) => state.games.list);
  // const isReady = useSelector((state) => state.games.isReady);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getGamesList());
  // }, [dispatch])


  // if (!isReady) 
    {
    return (
      <Container maxWidth="sm">
        <CircularProgress />
      </Container>)
  }

  // return (
  //   <>
  //     <Routes>
  //       <Route path='/' element={<Layout />}>
  //         <Route index element={<GamesList />} />
  //         <Route path='/game/:id' element={<GameBoard />} />
  //         <Route path="*" element={<Navigate to="/" replace />} />
  //       </Route>
  //     </Routes>
  //   </>
  // );
}

export default App;
