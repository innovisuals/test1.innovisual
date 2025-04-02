
import React, { useRef, useEffect, useState } from "react";

const Logo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [videoAttempts, setVideoAttempts] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);
  
  // Determine the base path for assets based on environment
  // This helps solve the GitHub Pages path issue
  const basePath = window.location.hostname.includes('github.io') 
    ? `${window.location.pathname.split('/').slice(0, -1).join('/')}`
    : '';
  
  const videoPath = `${basePath}/lovable-uploads/Logos-INNOVISUAL.mp4`;
  const logoImagePath = `${basePath}/lovable-uploads/c71cf1e6-ccfd-4d64-9e93-486e1580ce5d.png`;

  useEffect(() => {
    console.log("Using video path:", videoPath);
    
    // Reset the video state when the component mounts or when we retry
    if (videoRef.current) {
      const playVideo = () => {
        if (videoRef.current) {
          // Clear any previous source to ensure we're starting fresh
          videoRef.current.pause();
          
          // Force reload the video
          videoRef.current.load();
          
          // Add a small delay before attempting to play
          setTimeout(() => {
            if (videoRef.current) {
              // Log to debug
              console.log("Attempting to play video");
              
              videoRef.current.play().catch(error => {
                console.error("Error playing video:", error);
                if (videoAttempts >= 2) {
                  console.log("Max attempts reached, showing fallback");
                  setVideoError(true);
                } else {
                  // Retry playing the video after a short delay
                  console.log(`Retry attempt ${videoAttempts + 1}`);
                  setVideoAttempts(prev => prev + 1);
                  setTimeout(playVideo, 1000);
                }
              });
            }
          }, 500); // Increased delay for better loading
        }
      };

      // Try to play the video
      playVideo();

      // Set up event handlers
      videoRef.current.oncanplay = () => {
        console.log("Video can play");
        setIsVideoLoaded(true);
      };
      
      videoRef.current.onended = () => {
        console.log("Video playback ended");
        setIsVideoLoaded(true);
      };

      // Cleanup function to be called when component unmounts
      return () => {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.src = "";
          videoRef.current.load();
        }
      };
    }
  }, [videoAttempts, videoPath]);

  // Start animation when fallback image is shown
  useEffect(() => {
    if (videoError) {
      // Set animation complete after delay to match real animation duration
      const timer = setTimeout(() => {
        setAnimationComplete(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, [videoError]);

  // Function to handle video loading errors
  const handleVideoError = () => {
    console.error("Video loading error");
    setVideoError(true);
  };

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="w-full max-w-4xl">
        {!videoError ? (
          <video 
            ref={videoRef}
            className="w-full h-auto" 
            playsInline
            muted
            preload="auto"
            onError={handleVideoError}
            onLoadedData={() => {
              console.log("Video data loaded");
              setIsVideoLoaded(true);
            }}
            style={{ minHeight: "120px" }}
          >
            <source src={videoPath} type="video/mp4" />
            Your browser doesn't support the video element.
          </video>
        ) : (
          <div className="relative w-full h-auto" style={{ minHeight: "120px" }}>
            {/* Container for the animated logo */}
            <div className="logo-container w-full max-w-3xl mx-auto relative">
              {/* The symbols/icon part that appears first */}
              <div className="absolute top-0 left-0 w-full h-full flex justify-start">
                <div className="w-[15%] ml-[2%]">
                  <img 
                    src={logoImagePath} 
                    alt="INNOVISUAL Symbols" 
                    className="w-full h-auto object-contain logo-symbol-animation"
                  />
                </div>
              </div>
              
              {/* The text part that slides in from the left with blur effect */}
              <div className="w-full">
                <img 
                  src={logoImagePath} 
                  alt="INNOVISUAL" 
                  className="w-full h-auto object-contain logo-text-animation"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Logo;