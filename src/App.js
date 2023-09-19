import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainContent from './components/MainContent';
import './App.css';
import PrintComponent from './components/Print/PrintComponent';
import Payment from './components/Payment/Payment';
import FaceDetection from './facedetection/FaceDetection';
function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" Component={MainContent} />
        <Route path="/recipt" element={<PrintComponent />} />
        <Route path="/payment" element={<Payment />} />
        <Route path= "/camera"  element={<FaceDetection/>} />
      </Routes>
    </div>
  );
}

export default App;
