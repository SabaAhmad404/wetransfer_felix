import React, { useState, useEffect, useRef } from 'react';

export default function PlayVideo() {
  const videoRef = useRef(null);
  const audioRef = useRef(null);
  const [videoPlaying, setVideoPlaying] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const video = videoRef.current;
      const audio = audioRef.current;

      if (video && audio) {
        const videoTop = video.getBoundingClientRect().top;

        // Check if video is in the viewport
        if (videoTop >= 0 && videoTop <= window.innerHeight) {
          if (!videoPlaying) {
            video.play();
            setVideoPlaying(true);
          }
        } else if (videoPlaying) {
          video.pause();
          setVideoPlaying(false);
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

  return (
    <>
      <div className="autoplay-container">

        <video className="video" ref={videoRef} autoPlay loop style={{ width: '80%', height: '70%' }}>
          <source src="/video.mp4" type="video/mp4" />
          <track src="/captions.vtt" kind="captions" srcLang="en" label="English" default />
        </video>
        <audio ref={audioRef} autoPlay loop>
          <source src="/audio.mp3" type="audio/mpeg" />
          <track src="/captions.vtt" kind="captions" srcLang="en" label="English" default />
        </audio>

      </div>
    </>
  );
}
