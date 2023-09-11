import React, { useState } from 'react';

const ButtonPopup = () => {
  const [popups, setPopups] = useState(Array(6).fill(false));

  const togglePopup = (index) => {
    const updatedPopups = [...popups];
    updatedPopups[index] = !updatedPopups[index];
    setPopups(updatedPopups);
  };

  return (
    <div className="link-container">
      <div className="button-container">
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <button type="button" className="button-names" key={index} onClick={() => togglePopup(index - 1)}>
            Link
            {' '}
            {index}
          </button>
        ))}
      </div>
      <div className="popup-container">
        {popups.map((isOpen, index) => (isOpen ? (

        // Disable the react/no-array-index-key rule //
          <div key={index} className="popup">
            <div className="popup-content">
              Popup
              {' '}
              {index + 1}
              <span
                className="close-icon"
                onClick={() => togglePopup(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    togglePopup(index);
                  }
                }}
                role="button"
                tabIndex="0"
              >
                &#x2716;
              </span>
            </div>
          </div>
        ) : null))}
      </div>
    </div>
  );
};

export default ButtonPopup;
