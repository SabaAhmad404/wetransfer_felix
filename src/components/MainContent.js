import React from 'react';
import Logo from './Logo';
import PlayVideo from './PlayVideo';
import TextImages from './TextImages';
import CountdownTimer from './CountdownTimer';
import ShareButton from './ShareButton';
import ContactForm from './ContactForm';
import ButtonPopup from './ButtonPopup';

function MainContent() {
  return (
    <>
      <Logo />
      <PlayVideo />
      <TextImages />
      <ButtonPopup />
      <CountdownTimer />
      <ShareButton />
      <ContactForm />
    </>
  );
}

export default MainContent;
