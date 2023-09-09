import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";


export default function PlayVideo(){
    const videoRef=useRef(null);
    const audioRef=useRef(null);
    const[videoPlaying, setVideoPlaying]=useState(true);
    
    useEffect(()=> {

        const handleScroll = () => {
            const video = videoRef.current;
            const audio = audioRef.current;
      
            if (video && audio) {
              const videoTop = video.getBoundingClientRect().top;
              const audioTop = audio.getBoundingClientRect().top;
      
              // Check if video is in the viewport
              if (videoTop >= 0 && videoTop <= window.innerHeight) {
                if (!videoPlaying) {
                  video.play();
                  setVideoPlaying(true);
                }
              } else {
                if (videoPlaying) {
                  video.pause();
                  setVideoPlaying(false);
                }
              }
      
              // Always play audio
              audio.play();
            }
          };
      

          window.addEventListener('scroll', handleScroll);
      
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };



    }, [videoPlaying]);


  return(
    <>
       <div className="autoplay-container">

        <video ref={videoRef} autoPlay loop>
        <source id="video" src="/video.mp4" style={{ width: '200px', height: '100px' }}   type="video/mp4"/>
        </video>
          <audio ref={audioRef} autoPlay loop>
            <source src="/audio.mp3" type="audio/mpeg"/>

          </audio>

       </div>
    </>
  );



};