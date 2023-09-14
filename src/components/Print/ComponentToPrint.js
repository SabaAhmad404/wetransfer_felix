import React from 'react';
import userImg from '../images/user.jpg';
import './Print.css';

const ComponentToPrint = React.forwardRef((props, ref) => (
  <div ref={ref} className="print-details">
    <h1> GRADE ONE (Sponsor Certificate Recipt)</h1>
    <p className="first-para">This document Grant The CertifyHoldet - Perks Purchased</p>
    <img src={userImg} alt="user" />
    <h2 className="name">FULL NAME INSERT</h2>
    <h2 className="code">YAAVAAY: 45454545454545454545</h2>
    <div className="line" />
    <div className="details">
      <p>  This unique passcode permits secure access to the VICE(s) stated below.</p>
      <ul>
        <li>(01) - Lottery drawn participants unique passcode to enter intergalaxtic epiccentre ET handshake.</li>
        <li>(02) - Passcode to access secured channel-LIVE feed on moment of global ExtraTerristial contact.</li>
        <li>(03) - Sponsor(s) registered name to be forged into Giant Iron Tablet for historical commemoration.</li>
        <li>(04) - 10 days daily alert prior contact to collect tailored welcome uniform-space taxi pickup point.</li>
        <li>(05) - Permit access to the front of spacers seated position rim for an absolute unobstructive view.</li>
        <li>(06) - Prebooking residential deposited onto contact platform-spaceport for all future E.T contacts.</li>
        <li>(07) - Ten available return trips from Earth to Off-World visitations with or without Contact success.</li>
      </ul>
    </div>
    <div className="line" />
    <div className="third-para">
      <h3>Prior Entry into SpaceTaxi(s) PROTOCAL</h3>
      <ul>
        <li>(01)-Security facial Recognition MATCH</li>
        <li>(02)-Unique Passcode MATCH</li>
        <li>(03)-Identity MATCH</li>
      </ul>
    </div>
    <div className="line" />
    <div className="four-para">
      <h3>REFUND STATUS:</h3>
      <h3>LOCAL SPACE TAXIS REJECTION</h3>
      <p>“Sudden Death” refund occur upon individual(s) whom failed the meat-free biological toxin scan.</p>
      <h3>CONTACT PLATFORM CONDITION</h3>
      <p>Refund automated through YAAVAAY failure to accomplish intended products & services agreed.</p>
    </div>
    <div className="line" />
    <div className="five-para">
      <p>ALL SPONSORED PARTICIPANTS ARE STRONGLY ADVISED TO HAVE WITHIN THEIR POSSESSION UNIQUE PASSCODE OR CERTIFICATE RECEPT OR BOTH PRIOR ENTRY INTO SPACETAXIS.</p>
    </div>
    <div className="line" />
    <div className="last-para">
      <a href="www.google.com">www.google.com</a>
      <h5>( Earth Only Delibrate Mass Extraterrestrial Public Contact )</h5>
      <p>YAAVAAY private contractor(s) research and development inclusive of all intended services are fully responcible for the succession of mass Extraterrestrial contact witnessed and experienced on a global scale. YAAVAAY multifaceted designs to manufactures specific technologies in their delibrated targetted output to engineer with high intensions the appointed invitation of benevolent Off-World entities to demonstrate open contact and integration publicly.</p>
    </div>
  </div>
));

ComponentToPrint.displayName = 'ComponentToPrint';
export default ComponentToPrint;
