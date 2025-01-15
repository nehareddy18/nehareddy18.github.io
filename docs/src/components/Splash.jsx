import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import { useState, useEffect } from 'react';
import logo from '../assets/NR0SVG.png';

// Keyframes for pulsating effect
const pulsate = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.3);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

// Keyframes for circular loading
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SplashContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #027184;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  transform-origin: center;
`;

const LogoContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
`;

const Logo = styled(motion.img)`
  width: 100px;
  height: auto;
  animation: ${pulsate} 2s ease-in-out infinite;
`;

// Modified LoadingRing to be a progress circle
const LoadingRing = styled.svg`
  position: absolute;
  width: 180px;
  height: 180px;
  transform: rotate(-90deg);
`;

const Circle = styled.circle`
  fill: none;
  stroke-width: 4;
  stroke-linecap: round;
  &.background {
    stroke: rgba(255, 255, 255, 0.1);
  }
  &.progress {
    stroke: #ffffff;
    transition: stroke-dashoffset 0.2s ease;
  }
`;

const Splash = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const duration = 3000; // 3 seconds
    const interval = 16; // Smoother animation (60fps)
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min((currentStep / steps) * 100, 100); // Ensure we don't exceed 100
      setProgress(newProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setIsLoading(false);
        setTimeout(() => onFinish?.(),200); // Slight delay before transition
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onFinish]);

  // Adjust circumference calculation for larger radius
  const circumference = 2 * Math.PI * 60; // Increased radius from 45 to 60

  return (
    <SplashContainer
      initial={{ opacity: 1, scale: 1 }}
      animate={{ 
        opacity: isLoading ? 1 : 0,
        scale: isLoading ? 1 : 1.5,
      }}
      transition={{ 
        duration: 1,
        ease: "easeInOut",
        scale: {
          delay: 0.2,
          duration: 0.8
        }
      }}
      onAnimationComplete={() => {
        if (!isLoading) {
          document.body.style.overflow = 'unset';
        }
      }}
    >
      <LogoContainer>
        <LoadingRing viewBox="0 0 130 130">
          <Circle
            className="background"
            cx="65"
            cy="65"
            r="60"
          />
          <Circle
            className="progress"
            cx="65"
            cy="65"
            r="60"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (circumference * progress) / 100}
          />
        </LoadingRing>
        <Logo 
          src={logo}
          alt="Logo"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </LogoContainer>
    </SplashContainer>
  );
};

export default Splash;