import { useRef, useEffect, useState } from 'react';
import './detect.css';
import * as faceapi from 'face-api.js';

function FaceDetection() {
  const videoRef = useRef();
  const canvasRef = useRef();
  const [capturedImage, setCapturedImage] = useState(null);
  const [isCaptured, setIsCaptured] = useState(false); // Add a state variable
  const [faceDetected, setFaceDetected] = useState(false); // Add a state variable to track face detection
  /* eslint-disable */
  // LOAD FROM USEEFFECT
  useEffect(() => {
    startVideo();
    videoRef && loadModels();
  }, []);

  // OPEN YOUR FACE WEBCAM
  const startVideo = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((currentStream) => {
        videoRef.current.srcObject = currentStream;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // LOAD MODELS FROM FACE API
  const loadModels = async () => {
    await Promise.all([
      // THIS FOR FACE DETECT AND LOAD FROM YOUR PUBLIC/MODELS DIRECTORY
      faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
      faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
      faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
      faceapi.nets.faceExpressionNet.loadFromUri('/models'),
    ]);
    faceMyDetect();
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

      // Clear the canvas to remove the face detection mask
      const canvasContext = canvasRef.current.getContext('2d');
      canvasContext.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

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
          width: 940,
          height: 650,
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
          }, 3000); // 3000 milliseconds (3 seconds)
        }
      }
    }, 1000);
  };

  return (
    <div className="myapp">
      <h1>Face Detection</h1>
      {isCaptured ? (
        <img className="capturing" src={capturedImage} alt="Captured" />
      ) : (
        <div className="appvideo">
          <video crossOrigin="anonymous" ref={videoRef} autoPlay />
        </div>
      )}
      <canvas ref={canvasRef} width="940" height="650" className="appcanvas" />
    </div>
  );
}

export default FaceDetection;
