import React from 'react';
import Logo from './Logo';
import PlayVideo from './PlayVideo';
import TextImages from './TextImages';
import CountdownTimer from './CountdownTimer';
import ShareButton from './ShareButton';
import ContactForm from './ContactForm';
import FormPopup from './FormPopup';
// import FaceDetection from './FaceDetection';

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
      {/* <FaceDetection/> */}
    </>
  );
}

export default MainContent;
