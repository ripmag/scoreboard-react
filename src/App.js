// import './App.css';
import { useState } from 'react';
import GamesList from './components/GamesList';

const list = [{id: 1}, {id: 2}]

function App() {
  return (
    <div className="App">
      <GamesList list={list} />
    </div>
  );
}

export default App;
