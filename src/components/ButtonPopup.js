import React from 'react';
import PropTypes from 'prop-types';
import backvideo from './images/backvideo.mp4';

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
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  onClose();
                }
              }}
              role="button"
              tabIndex="0"
            >
              &#x2716;
            </span>
            
            {/* Video section */}
            <div className="video-overlay">
              <video autoPlay muted loop className="background-video">
                <source src={backvideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            
            <div className="diff-container">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ButtonPopup.propTypes = {
  isOpen: PropTypes.bool.isRequired, // 'isOpen' should be a required boolean
  onClose: PropTypes.func.isRequired, // 'onClose' should be a required function
  children: PropTypes.node, // 'children' can be any renderable React node
};

ButtonPopup.defaultProps = {
  children: null, // You can provide a default value here if needed
};

export default ButtonPopup;
