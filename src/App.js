import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Logo from './components/Logo';
import PlayVideo from './components/PlayVideo';
import TextImages from './components/TextImages';
import CountdownTimer from './components/CountdownTimer';
import ShareButton from './components/ShareButton';

import './App.css';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" Component={Logo} />
      </Routes>
      <PlayVideo />
      <TextImages />
      <CountdownTimer />
      <ShareButton />

    </div>
  );
}

export default App;
