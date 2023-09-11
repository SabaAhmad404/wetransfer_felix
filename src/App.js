import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Logo from './components/Logo';
import PlayVideo from './components/PlayVideo';
import TextImages from './components/TextImages';
import CountdownTimer from './components/CountdownTimer';
import ShareButton from './components/ShareButton';
import ContactForm from './components/ContactForm';
import ButtonPopup from './components/ButtonPopup';
import './App.css';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" Component={Logo} />
      </Routes>
      <PlayVideo />
      <TextImages />
      <ButtonPopup />
      <CountdownTimer />
      <ShareButton />
      <ContactForm />

    </div>
  );
}

export default App;
