import React from 'react';
import Logo from './Logo';
import PlayVideo from './PlayVideo';
import TextImages from './TextImages';
import CountdownTimer from './CountdownTimer';
import ShareButton from './ShareButton';
import ContactForm from './ContactForm';
import FormPopup from './FormPopup';

function MainContent() {
  return (
    <>
      <Logo />
      <PlayVideo />
      <TextImages />
      <FormPopup />
      <CountdownTimer />
      <ShareButton />
      <ContactForm />
    </>
  );
}

export default MainContent;
