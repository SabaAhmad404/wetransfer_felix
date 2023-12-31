import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FaceDetection from '../facedetection/FaceDetection';
import btnImg from '../images/WITH-ALPHA-CHANNEL_GIhan_BTV_Creation_2nd-option__the-better-Y-BUTTON_Fiverr-Test_.gif';

const FormFive = () => {
  const [capturedImage, setCapturedImage] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const totalSections = 3;
  const [formData, setFormData] = useState({
    productId: '2',
    image: '',
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNext = () => {
    // Move to the next section
    console.log(capturedImage);
    setCurrentStep((prevSection) => (prevSection < totalSections ? prevSection + 1 : prevSection));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await fetch('https://api.yaavaay.com/v1/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // Handle successful API response
        const userData = await response.json();
        console.log(userData);
        navigate('./payment');
      } else if (response.status === 400) {
        throw new Error('Bad request: the data provided is invalid');
      } else if (response.status === 401) {
        throw new Error('Unauthorized: authorization require');
      } else if (response.status === 500) {
        throw new Error('Internal server error: Something went wrong on the server.');
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      // Handle network errors
      setError(error.message);
    }
  };

  const renderSection = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="input-main">
            <div className="input-container">

              {capturedImage ? (
                <div className="captured-image-container">
                  {' '}
                  <img src={capturedImage} alt="Captured" />
                </div>
              ) : (<FaceDetection setCapturedImage={setCapturedImage} setFormData={setFormData} />)}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="input-main">
            <div className="input-container">
              <div className="any">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  onChange={handleChange}
                  required
                  minLength={3}
                  maxLength={13}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  onChange={handleChange}
                  required
                  minLength={3}
                  maxLength={13}
                />
              </div>
            </div>

          </div>
        );
      case 3:
        return (
          <div className="input-main">
            <div className="input-container">
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                required
              />
              {/* <button type="button" className="capture">y</button> */}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (

    <div className="diff-container">
      <form onSubmit={handleSubmit}>
        {renderSection()}
        {currentStep < totalSections && (
          <button onClick={handleNext} type="button" className="button-names">
            {' '}
            <img src={btnImg} alt="y-logo" />
          </button>
        )}
        {currentStep === totalSections && (<button type="submit" className="button-names"><img src={btnImg} alt="y-logo" /></button>
        )}
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default FormFive;
