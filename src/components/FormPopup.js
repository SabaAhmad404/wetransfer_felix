import React, { useState } from 'react';
import ButtonPopup from './ButtonPopup';
import FormOne from './RegisterForm/FormOne';
import btnImg from './images/WITH-ALPHA-CHANNEL_GIhan_BTV_Creation_2nd-option__the-better-Y-BUTTON_Fiverr-Test_.gif';
import FormTwo from './RegisterForm/FormTwo';
import FormThree from './RegisterForm/FormThree';
import FormFour from './RegisterForm/FormFour';
import FormFive from './RegisterForm/FormFive';

function FormPopup() {
  const [currentForm, setCurrentForm] = useState(null); // Track the currently displayed form

  const openForm = (formNumber) => {
    setCurrentForm(formNumber);
  };

  const closeForm = () => {
    setCurrentForm(null);
  };

  return (
    <>
      <h1 className="involvement">Select Your Involvement: </h1>
      <div className="button-container">
        <div>
          <h2>Vice 01 - $100</h2>
          <button
            type="button"
            className="button-names"
            onClick={() => openForm(1)}
          >
            Link1
            <img src={btnImg} alt="y-logo" />
          </button>
        </div>
        <div>
          <h2>Vice 02 - $1000</h2>
          <button
            type="button"
            className="button-names"
            onClick={() => openForm(2)}
          >
            Link2
            <img src={btnImg} alt="y-logo" />
          </button>
        </div>
        <div>
          <h2>Vice 03 - $10,000</h2>
          <button
            type="button"
            className="button-names"
            onClick={() => openForm(3)}
          >
            Link3
            <img src={btnImg} alt="y-logo" />
          </button>
        </div>
        <div>
          <h2>Vice 04 - $100,000</h2>
          <button
            type="button"
            className="button-names"
            onClick={() => openForm(4)}
          >
            Link4
            <img src={btnImg} alt="y-logo" />
          </button>
        </div>
        <div>
          <h2>Vice 05 - $1,000,000</h2>
          <button
            type="button"
            className="button-names"
            onClick={() => openForm(5)}
          >
            Link5
            <img src={btnImg} alt="y-logo" />
          </button>
        </div>
      </div>
      <ButtonPopup isOpen={currentForm !== null} onClose={closeForm}>
        {currentForm === 1 && <FormOne />}
        {currentForm === 2 && <FormTwo />}
        {currentForm === 3 && <FormThree />}
        {currentForm === 4 && <FormFour />}
        {currentForm === 5 && <FormFive />}
      </ButtonPopup>
      <div className="live-budget">
        <h2>LIVE AMOUNT</h2>
        <h2>$0</h2>
      </div>
      <div className="para">
        <p>This is the ONLY site on Planet Earth for this LIVE Humanity intergalactic integration</p>
      </div>
    </>
  );
}

export default FormPopup;
