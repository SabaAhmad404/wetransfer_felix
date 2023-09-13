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
import PrintComponent from './components/Print/PrintComponent';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" Component={Logo} />
        <Route path="/recipt" element={<PrintComponent />} />
      </Routes>
      <PlayVideo />
      <TextImages />
      <ButtonPopup />
      <CountdownTimer />
      <ShareButton />
      <ContactForm />
      <PrintComponent />
    </div>
  );
}

export default App;
