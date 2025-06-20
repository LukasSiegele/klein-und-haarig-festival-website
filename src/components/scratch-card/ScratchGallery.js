import React, { useState, useMemo, useEffect } from 'react';
import styled from 'styled-components';
import ScratchCard from './ScratchCard';


const ScratchGallery = ({ images = [], onShuffle }) => {  
  const [activeIndex, setActiveIndex] = useState(0);
  const [scratchedLayers, setScratchedLayers] = useState([]);

  // State for brush size
  const [brushSize, setBrushSize] = useState(40);
  const minBrush = 10;
  const maxBrush = 80;
  const brushPercent = ((brushSize - minBrush) / (maxBrush - minBrush)) * 100;
  
  const [isHintVisible, setIsHintVisible] = useState(false);
  useEffect(() => {
    setActiveIndex(0);
    setScratchedLayers([]);

    // This is for the in-out animation of the "Try drawing here" hint text
    const showTimeout = setTimeout(() => {
      setIsHintVisible(true);
    }, 400); 

    const hideTimeout = setTimeout(() => {
      setIsHintVisible(false);
    }, 4500); 

    
    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, [images]);

  const cardStyles = useMemo(() => 
    images.map(() => ({
      x: Math.random() * 0 - 0,
      y: Math.random() * 0 - 0,
      rot: Math.random() * 0 - 0,
    })), 
  [images.length]);

  const handleScratchComplete = (index, canvasElement) => {
    if (index === activeIndex) {
      const snapshotUrl = canvasElement.toDataURL();
      setScratchedLayers(prevLayers => [
        ...prevLayers, 
        { src: snapshotUrl, styleProps: cardStyles[index], zIndex: images.length - index }
      ]);
      setActiveIndex(activeIndex + 1);
    }
  };

  return (
    <GalleryWrapper>
      {scratchedLayers.map((layer) => (
        <SnapshotImage 
          key={layer.src}
          src={layer.src}
          styleProps={layer.styleProps}
          style={{ zIndex: layer.zIndex }}
        />
      ))}
      
      {images.length > 0 && 
        <CardContainer 
          isActive={false}
          styleProps={cardStyles[images.length - 1] || {x:0, y:0, rot:0}}
          style={{ zIndex: 0 }}
        >
          <img src={images[images.length - 1]} alt="Last picture of the festival" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </CardContainer>
      }
      
      {images.slice(activeIndex).map((src, i) => {
        const index = activeIndex + i;
        if (index >= images.length - 1) return null;

        return (
          <CardContainer 
            key={src}
            isActive={index === activeIndex}
            styleProps={cardStyles[index]}
            style={{ zIndex: images.length - index }}
          >
            <ScratchCard
              topImageSrc={src}
              bottomImageSrc={images[index + 1]}
              onComplete={(canvas) => handleScratchComplete(index, canvas)}
              brushSize={brushSize} // Passes the brush size
            />
          </CardContainer>
        );
      })}

      <ShuffleButton onClick={onShuffle} title="Neue Bilder laden">
        <ShuffleIcon src="/icons/reload.svg" alt="Neu laden" />
      </ShuffleButton>
      
      <DrawHintText isVisible={isHintVisible}>
        Try drawing here!
      </DrawHintText>

      <SliderContainer>
        <VerticalSlider 
          min={minBrush}
          max={maxBrush}
          value={brushSize}
          onChange={(e) => setBrushSize(parseInt(e.target.value, 10))}
          percent={brushPercent}
        />
      </SliderContainer>
    </GalleryWrapper>
  );
};

export default ScratchGallery;


const ShuffleButton = styled.button`
  position: absolute;
  bottom: 194px;
  right: 20px;
  z-index: 100;
  
  width: 40px;
  height: 40px;
  padding: 4px;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 8px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 900px) {
    bottom: 20px;
    // bottom: 210px;
    right: 20px; 
  }
`;

const ShuffleIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 24px;
  right: 20px;
  z-index: 100;
  width: 40px;
  height: 160px;
  padding: 16px;
  background: rgba(0, 0 , 0, 0.4);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 8px;
  border: none;

  @media (max-width: 900px) {
    display: none;
  }
`;

const VerticalSlider = styled.input.attrs({ type: 'range' })`
  position: relative;
  top: 50%;
  left: 50%;
  border: none;
  
  -webkit-appearance: none;
  appearance: none;
  width: 150px;
  height: 8px;
  padding-bottom: 24px
  background: transparent; /* Die Basis ist transparent */
  margin: 0;
  transform-origin: center center;
  transform: translate(-50%, -50%) rotate(-90deg); /* Dreht und zentriert den Slider perfekt */


  /* Webkit (Chrome, Safari) Track-Styling */
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 8px;
    cursor: pointer;
    border-radius: 4px;
    background: linear-gradient(
      to right, /* 'to right' ist korrekt für einen um 90 Grad gedrehten Slider */
      #F0F263 ${({ percent }) => percent}%, 
      rgba(255, 255, 255, 0.3) ${({ percent }) => percent}%
    );
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    // border: 2px solid rgba(0, 0, 0, 0.5);
    height: 18px;
    width: 18px;
    border-radius: 50%;
    background: #F0F263;
    cursor: pointer;
    margin-top: -5px; /* corrects the vertical position of the thumb on the track */
  }

  /* Firefox Track-Styling */
  &::-moz-range-track {
    width: 100%;
    height: 8px;
    cursor: pointer;
    border-radius: 4px;
    background: linear-gradient(
      to right,
      #F0F263 ${({ percent }) => percent}%, 
      rgba(255, 255, 255, 0.3) ${({ percent }) => percent}%
    );
  }

  &::-moz-range-thumb {
    border: 2px solid rgba(0, 0, 0, 0.5);
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #F0F263;
    cursor: pointer;
  }
`;


const GalleryWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 90vh;
  // max-width: 1000px;
  aspect-ratio: 4 / 3; 
  margin: auto;

  @media (max-width: 900px) {
    height: 70vh;
  }
`;

const CardContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: ${({ isActive }) => (isActive ? 'auto' : 'none')};
  transform: ${({ styleProps }) => 
    `translate(${styleProps.x}px, ${styleProps.y}px) rotate(${styleProps.rot}deg)`};
`;

const SnapshotImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  transform: ${({ styleProps }) => 
    `translate(${styleProps.x}px, ${styleProps.y}px) rotate(${styleProps.rot}deg)`};
`;

const DrawHintText = styled.div`
  z-index: 101;
  position: absolute;
  top: 50%;
  left: 50%;
  padding-left: 133px;
  transform: translate(-50%, -50%);
  pointer-events: none;
  display: inline-block;
  color: #f0f263;
  font-family: Inter, sans-serif;
  font-size: 1.1em;
  font-weight: 500;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.9);
  white-space: nowrap;

  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)}; 
  transition: opacity 0.5s ease-in-out;

  @media (max-width: 800px) {
    font-size: 1em;
    padding-left: 0px;
  }
`;
