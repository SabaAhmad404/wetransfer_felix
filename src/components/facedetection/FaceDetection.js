import React, { useRef, useEffect, useState } from 'react';
import './detect.css';
import * as faceapi from 'face-api.js';
import image1 from '../images/user.png';

function FaceDetection({ setCapturedImage, setFormData }) {
  const videoRef = useRef();
  const canvasRef = useRef();
  const [isCaptured, setIsCaptured] = useState(false); // Add a state variable
  const [faceDetected, setFaceDetected] = useState(false); // Add a state variable to track face detection
  const [isVideoOn, setIsVideoOn] = useState(false);

  const startVideoAndDetect = async () => {
    setIsVideoOn(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;

      // Load face-api.js models
      await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
        faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
        faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
        faceapi.nets.faceExpressionNet.loadFromUri('/models'),
      ]);

      // Start face detection
      faceMyDetect();
    } catch (error) {
      console.log(error);
    }
  };

  const stopVideo = () => {
    const stream = videoRef.current.srcObject;
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach((track) => {
        track.stop(); // Stop each track in the stream
      });
      videoRef.current.srcObject = null; // Release the video element's reference to the stream
    }
  };

  // Capture an image
  const captureImage = () => {
    const videoElement = videoRef.current;
    if (!videoElement || !videoElement.videoWidth || !videoElement.videoHeight) {
      // Video element is not ready or doesn't have videoWidth/videoHeight properties yet
      return;
    }

    const canvas = document.createElement('canvas');
    canvas.width = videoElement.videoWidth;
    canvas.height = videoElement.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

    // Convert the captured frame to a blob
    canvas.toBlob((blob) => {
      const imageSrc = URL.createObjectURL(blob);
      setCapturedImage(imageSrc); // Set the captured image URL
      setIsCaptured(true); // Set isCaptured to true
      const key = 'image';
      setFormData({
        [key]: imageSrc,
      });

      // Clear the canvas to remove the face detection mask
      const canvasContext = canvasRef.current.getContext('2d');
      canvasContext.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      stopVideo();
      // Reset faceDetected after a successful capture
      setFaceDetected(false);
    }, 'image/jpeg');
  };

  const faceMyDetect = () => {
    setInterval(async () => {
      if (videoRef.current && videoRef.current.readyState === 4) {
        const videoElement = videoRef.current;
        const canvasElement = canvasRef.current;

        const detections = await faceapi.detectAllFaces(videoElement, new faceapi.TinyFaceDetectorOptions())
          .withFaceLandmarks()
          .withFaceExpressions();

        // Draw your face in the webcam
        const canvasContext = canvasElement.getContext('2d');
        canvasContext.drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height);

        faceapi.matchDimensions(canvasElement, {
          width: 150,
          height: 150,
        });

        const resizedDetections = faceapi.resizeResults(detections, {
          width: canvasElement.width,
          height: canvasElement.height,
        });

        // Clear the canvas before drawing the new frame
        canvasContext.clearRect(0, 0, canvasElement.width, canvasElement.height);

        // Draw bounding boxes around detected faces
        faceapi.draw.drawDetections(canvasElement, resizedDetections);
        faceapi.draw.drawFaceLandmarks(canvasElement, resizedDetections);
        faceapi.draw.drawFaceExpressions(canvasElement, resizedDetections);

        if (resizedDetections.length > 0 && !faceDetected) {
          // If faces are detected and faceDetected is false, set a timer to capture the image after 3 seconds
          setFaceDetected(true);
          setTimeout(() => {
            captureImage();
          }, 2000); // 3000 milliseconds (3 seconds)
        }
      }
    }, 1000);
  };

  return (
    <div className="myapp">
      <div className="appvideo">
        {isVideoOn ? (
          <video crossOrigin="anonymous" ref={videoRef} autoPlay height={250} width={250} />

        ) : (
          <img
            src={image1}
            className="webcam-img"
            alt="Captured"
            onClick={startVideoAndDetect} // Clicking the image turns on the camera.
            style={{ cursor: 'pointer' }}
          />
        )}

      </div>

      {isVideoOn && <canvas ref={canvasRef} width="200" height="200" className="appcanvas" />}
    </div>
  );
}

export default FaceDetection;
