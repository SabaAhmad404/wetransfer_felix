import React from "react";
import text1 from "./images/text1.svg";
import text2 from "./images/text2.svg";
import text3 from "./images/text3.svg";
import text4 from "./images/text1.svg";
import text5 from "./images/text5.svg";
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
        <img className="world-map" src={text1} alt="image-text" />
        <img className="world-map" src={text2} alt="image-text" />
        <img className="world-map" src={text3} alt="image-text" />
        <img className="world-map" src={text4} alt="image-text" />
        <img className="world-map" src={text5} alt="image-text" />
    </div>
  );
}
