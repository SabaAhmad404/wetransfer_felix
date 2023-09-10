import React from 'react';
import result from './images/result.png';

export default function Logo() {
  return (
    <>
      <div className="logo">
        <img className="logo-imge" src={result} alt="logo-img" />
      </div>
    </>
  );
}
