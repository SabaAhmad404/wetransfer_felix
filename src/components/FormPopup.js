import React, { useState } from 'react';
import ButtonPopup from './ButtonPopup';
import FormOne from './RegisterForm/FormOne';
import btnImg from './images/WITH-ALPHA-CHANNEL_GIhan_BTV_Creation_2nd-option__the-better-Y-BUTTON_Fiverr-Test_.gif';
import FormTwo from './RegisterForm/FormTwo';
import FormThree from './RegisterForm/FormThree';
import FormFour from './RegisterForm/FormFour';
import FormFive from './RegisterForm/FormFive';
import FormSix from './RegisterForm/FormSix';

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
      <div className="button-container">
        <button
          type="button"
          className="button-names"
          onClick={() => openForm(1)}
        >
          Link1
          <img src={btnImg} alt="y-logo" />
        </button>
        <button
          type="button"
          className="button-names"
          onClick={() => openForm(2)}
        >
          Link2
          <img src={btnImg} alt="y-logo" />
        </button>
        <button
          type="button"
          className="button-names"
          onClick={() => openForm(3)}
        >
          Link3
          <img src={btnImg} alt="y-logo" />
        </button>
        <button
          type="button"
          className="button-names"
          onClick={() => openForm(4)}
        >
          Link4
          <img src={btnImg} alt="y-logo" />
        </button>
        <button
          type="button"
          className="button-names"
          onClick={() => openForm(5)}
        >
          Link5
          <img src={btnImg} alt="y-logo" />
        </button>
        <button
          type="button"
          className="button-names"
          onClick={() => openForm(6)}
        >
          Link6
          <img src={btnImg} alt="y-logo" />
        </button>
      </div>
      <ButtonPopup isOpen={currentForm !== null} onClose={closeForm}>
        {currentForm === 1 && <FormOne />}
        {currentForm === 2 && <FormTwo />}
        {currentForm === 3 && <FormThree />}
        {currentForm === 4 && <FormFour />}
        {currentForm === 5 && <FormFive />}
        {currentForm === 6 && <FormSix />}
      </ButtonPopup>
    </>
  );
}

export default FormPopup;
