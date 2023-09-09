import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Logo from './components/Logo';
import PlayVideo from './components/PlayVideo';
import TextImages from './components/TextImages';
import CountdownTimer from './components/CountdownTimer';
import './App.css';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route exact path="/" Component={Logo} />
      </Routes>
      <PlayVideo />
      <TextImages />
      <CountdownTimer />
    </div>
  );
}

export default App;
