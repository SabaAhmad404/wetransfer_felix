import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import ComponentToPrint from './ComponentToPrint';
import './Print.css';

export default function PrintComponent() {
  const componentRef = useRef();

  return (
    <>
      <div className="print-btn">
        <ComponentToPrint ref={componentRef} />
        <ReactToPrint
          trigger={() => <button type="button">Print</button>}
          content={() => componentRef.current}
        />
      </div>
    </>
  );
}
