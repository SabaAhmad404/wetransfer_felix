import React from 'react';
import text1 from './images/text1.svg';
import text2 from './images/text2.svg';
import text3 from './images/text3.svg';
import text4 from './images/text4.svg';
import text5 from './images/text5.svg';

export default function TextImages() {
  return (
    <>
      <div className="image-gallery">
        <img className="image-text1" src={text1} alt="first text" />
        <img className="image-text1" src={text2} alt="text2" />
        <img className="image-text1" src={text3} alt="text3" />
        <img className="image-text1" src={text4} alt="text4" />
        <img className="image-text1" src={text5} alt="text5" />
      </div>
    </>
  );
}
