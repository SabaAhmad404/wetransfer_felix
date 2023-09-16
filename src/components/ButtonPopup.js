import React from 'react';

const ButtonPopup = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="link-container">
      <div className="popup-container">
        <div className="popup">
          <div className="popup-content">
            <span
              className="close-icon"
              onClick={() => {
                onClose();
                // togglePopup();
                // clearImage();
                // resetState();
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  onClose();
                  // togglePopup();
                  // clearImage();
                }
              }}
              role="button"
              tabIndex="0"
            >
              &#x2716;
            </span>
            <div className="diff-container">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonPopup;
