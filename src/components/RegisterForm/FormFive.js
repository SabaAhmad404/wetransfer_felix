import React, { useState } from 'react';
import Webcam from 'react-webcam';
import image1 from '../images/image1.jpg';
import btnImg from '../images/WITH-ALPHA-CHANNEL_GIhan_BTV_Creation_2nd-option__the-better-Y-BUTTON_Fiverr-Test_.gif';

const FormFive = () => {
  const [capturedImage, setCapturedImage] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSections = 3;
  const [formData, setFormData] = useState({
    user_image: '',
    firstName: '',
    lastName: '',
    email: '',
  });
  const [showCamera, setShowCamera] = useState(false);

  const webcamRef = React.useRef(null);

  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
  };

  //   const clearImage = () => {
  //     setCapturedImage(null);
  //   };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNext = () => {
    // Move to the next section
    setCurrentStep((prevSection) => (prevSection < totalSections ? prevSection + 1 : prevSection));
  };

  const handlePrevious = () => {
    // Move to the previous section
    setCurrentStep((prevSection) => (prevSection > 1 ? prevSection - 1 : prevSection));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // try {
    //   const response = await fetch('https://your-api-endpoint.com', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    //   });
    //   if (response.ok) {
    //     // Handle successful API response
    //     console.log(formData);
    //     console.log('Data posted successfully');
    //   } else {
    //     // Handle API errors
    //     console.error('Error posting data to API');
    //   }
    // } catch (error) {
    //   // Handle network errors
    //   console.error('Network error:', error);
    // }
  };

  const renderSection = () => {
    switch (currentStep) {
      case 1:
        return (
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
                /* eslint-disable*/ 
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
              value={formData.email}
              onChange={handleChange}
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
              {/* <button onClick={handlePrevious} disabled={currentStep === 1}>Previous</button> */}
              {currentStep < totalSections ? (
              <button onClick={handleNext} type='button' className='button-names'> <img src={btnImg} alt="y-logo" /></button>
            ) : (
                <button type='submit'>Submit</button>

            )}
        </form>

    </div>
  );
};

export default FormFive;
