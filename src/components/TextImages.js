import React from 'react';
import text1 from './images/text1.svg';
import text2 from './images/text2.svg';
import text3 from './images/text3.svg';
import text4 from './images/text4.svg';
import text5 from './images/text5.svg';

export default function TextImages() {
//   const textImages = [
//     '/components/images/image1.jpg',
//      '/components/images/text2.jpg',
//      '/components/images/text3.jpg',
//      '/components/images/text4.jpg',
//      '/components/images/text5.jpg',
//   ];

  return (
    <div className="image-gallery">
      {/* {textImages.map((text, index) => (
        <img
          className="gallery-images"
          key={index}
          src={text}
          alt="text-images"
        />
      ))} */}
      <img className="image-text1" src={text1} alt="paragraph of a text" />
      <img className="image-text2" src={text2} alt="red car" />
      <img className="image-text3" src={text3} alt="blue horse" />
      <img className="image-text3" src={text4} alt="red horse" />
      <img className="image-text5" src={text5} alt="web app" />
    </div>
  );
}
