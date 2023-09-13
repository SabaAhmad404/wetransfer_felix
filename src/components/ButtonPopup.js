import React, { useState } from 'react';
import Webcam from 'react-webcam';
import image1 from './images/image1.jpg';
import result from './images/result.png';

const ButtonPopup = () => {
  const [popups, setPopups] = useState(Array(6).fill(false));
  const [capturedImage, setCapturedImage] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const [showCamera, setShowCamera] = useState(false);
  const resetState = () => {
    setPopups(Array(6).fill(false));
    setCapturedImage(null);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
    });
    setShowCamera(false);
  };
  const togglePopup = (index) => {
    const updatedPopups = [...popups];
    updatedPopups[index] = !updatedPopups[index];
    setPopups(updatedPopups);
  };

  // const toggleCamera = () => {
  //   setShowCamera(!showCamera); // Toggle the camera when clicking on the image.
  // };

  const webcamRef = React.useRef(null);

  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
  };

  const clearImage = () => {
    setCapturedImage(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="link-container">
      <div className="button-container">
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <button
            type="button"
            className="button-names"
            key={index}
            onClick={() => togglePopup(index - 1)}
          >
            Link
            {' '}
            {index}
          </button>
        ))}
      </div>
      <div className="popup-container">
        {popups.map((isOpen, index) => (isOpen ? (
          <div key={index} className="popup">
            <div className="popup-content">
              <span
                className="close-icon"
                onClick={() => {
                  togglePopup(index);
                  clearImage();
                  resetState();
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    togglePopup(index);
                    clearImage();
                  }
                }}
                role="button"
                tabIndex="0"
              >
                &#x2716;
              </span>
              <div className="diff-container">
                <div className="input-main">
                  <div className="input-container">
                    {capturedImage ? (
                      <div className="captured-image-container">
                        <img src={capturedImage} alt="Captured" />
                      </div>
                    ) : (
                      <div className="webcam-container">
                        {showCamera ? (
                          <Webcam
                            className="webcam"
                            audio={false}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                          />
                        ) : (
                          /* eslint-disable */
                          <img
                            src={image1}
                            className="webcam-img"
                            alt="Captured"
                            onClick={() => setShowCamera(true)} // Clicking the image turns on the camera.
                            style={{ cursor: 'pointer' }}
                          />
                        )}

                        {showCamera ? (
                          <button type="button" className="capture" onClick={captureImage}>
                            Y
                          </button>
                        ) : null}
                      </div>
                    )}
                  </div>
                </div>
                <div className="input-main">
                  <div className="input-container">
                    <div className="any">
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="result-logo">
                      <img className="capture" src={result} style={{ height: '7rem', width: '2rem' }} />
                    </div>
                  </div>

                </div>

                <div className="input-main">
                  <div className="input-container">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {/* <button type="button" className="capture">y</button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null))}
      </div>
    </div>
  );
};

export default ButtonPopup;
