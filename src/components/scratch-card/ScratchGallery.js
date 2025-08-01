import React, { useState, useMemo, useEffect } from 'react';
import styled from 'styled-components';
import ScratchCard from './ScratchCard';
import CustomBrushIcon from '../../../static/icons/raupe_kuh_2025.svg';

const ScratchGallery = ({ images = [], onShuffle }) => {  
  const [activeIndex, setActiveIndex] = useState(0);
  const [scratchedLayers, setScratchedLayers] = useState([]);
  const [brushSize, setBrushSize] = useState(80);
  const minBrush = 10;
  const maxBrush = 160;
  const brushPercent = ((brushSize - minBrush) / (maxBrush - minBrush)) * 100;

  const [isHintVisible, setIsHintVisible] = useState(false);
  const [isThankYouVisible, setIsThankYouVisible] = useState(false);
  const [isDateVisible, setIsDateVisible] = useState(false);
  const [isContinueVisible, setIsContinueVisible] = useState(false);
  const [isReloadTextVisible, setIsReloadTextVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);



  // Initial loading checks
  useEffect(() => {
    if (!images || images.length === 0) return;
    setIsLoaded(false);
    setActiveIndex(0);
    setScratchedLayers([]);

    const preloadPromises = images.map(src => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    });
    Promise.all(preloadPromises)
      .then(() => {
        console.log("Alle Bilder für die Galerie vorgeladen. Zeige an.");
        setIsLoaded(true);
      })
      .catch(err => {
        console.error("Ein oder mehrere Bilder konnten nicht geladen werden.", err);
        setIsLoaded(true);
      });
  }, [images]);

  // Initial reset of timers for texts on Gallery
  useEffect(() => {
    setActiveIndex(0);
    setScratchedLayers([]);
    setIsDateVisible(false);
    setIsReloadTextVisible(false);
    // setIsThankYouVisible(false);
    const showTimeout = setTimeout(() => setIsHintVisible(true), 400); 
    const hideTimeout = setTimeout(() => setIsHintVisible(false), 3000); 
    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, [images]);

  // Shows and then hides texts on Gallery

  // Draw here for more Text
  useEffect(() => {
    // Shows draw here text if first card is active
    if (activeIndex === 0) {
      setIsHintVisible(true);

      // removes text after 4s
      const timer = setTimeout(() => {
        setIsHintVisible(false);
      }, 4000); // 4s visibility

      // cleanup function to stop timer
      return () => clearTimeout(timer);

    } else {
      // Also: if the image active is not image 1, e.g. image nr. 2 turns active - the text now gets removed
      setIsHintVisible(false);
    }
  }, [activeIndex]);

  // "Thank You + Date" Text
  useEffect(() => {
    // Shows thank you text if second card turns active
    if (activeIndex === 1) {
      setIsThankYouVisible(true);

      // removes text aber 4s
      const timer = setTimeout(() => {
        setIsThankYouVisible(false);
      }, 4000); // 4s visibility

      // cleanup function to stop timer
      return () => clearTimeout(timer);

    } else {
      // Also: if the image active is not image 2, e.g. image nr. 3 - the text also gets removed
      setIsThankYouVisible(false);
    }
  }, [activeIndex]);


  // "Continue for more" Text
  useEffect(() => {
    // Timer starts to show text after 4s
    let timer;

    // Only if 2nd img is active
    if (activeIndex === 1) {
      timer = setTimeout(() => {
        setIsContinueVisible(true);
      }, 4000); // 4s delay
    } else {
      setIsContinueVisible(false);
    }
    return () => clearTimeout(timer);
    
  }, [activeIndex]);



  // "Reload images" text
  useEffect(() => {
    if (images.length > 0 && activeIndex === images.length - 1) {
      setIsReloadTextVisible(true);
    }
  }, [activeIndex, images.length]);
  


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
      {isLoaded ? (
        <>
          {/* Trying to improve loading images in gallersy: this part is only loaded if isLoaded is true*/}
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
                  brushSize={brushSize}
                  brushImageSrc={CustomBrushIcon}
                />
              </CardContainer>
            );
          })}
        </>
      ) : (

        <div style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <p style={{color: '#f0f263;', fontFamily: 'Inter, sans-serif', fontSize: 0.8, fontWeight: 500}}>Loading Gallery...</p>
        </div>  
      )}

      
      <DrawHintText isVisible={isHintVisible}>
        Draw here for more 
      </DrawHintText>


      <GalleryThankYouTextContainer isVisible={isThankYouVisible}>
        <GalleryThankYouText>Thank you!</GalleryThankYouText>
        <GalleryDateText isVisible={isDateVisible}> KuH26 <br /> 09.—12.07.26 </GalleryDateText>
      </GalleryThankYouTextContainer>

      <ContinueHintText isVisible={isContinueVisible}>
        There's more :-) 
      </ContinueHintText>


      <ReloadImagesText isVisible={isReloadTextVisible} onClick={onShuffle}> Reload images </ReloadImagesText>


      {/* <ShuffleButton onClick={onShuffle} title="Load new images">
        <ShuffleIcon src="/icons/reload.svg" alt="Reload images" />
      </ShuffleButton> */}
      

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

const GalleryThankYouTextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  padding-left: 133px;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  
  z-index: 50;
  pointer-events: none;

  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  
  @media (max-width: 800px) {
    padding-left: 0px;
  }
`;

const GalleryThankYouText = styled.h2`
  z-index: 50;
  
  pointer-events: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none; 

  color: #f0f263;
  font-size: 2.4em;
  font-weight: bold;
  text-align: center;
  text-shadow: 0px 4px 15px rgba(0, 0, 0, 0.6);
  
  @media (max-width: 800px) {
    font-size: 2.4em;
    padding-left: 0px;
  }
`;

const GalleryHintText = styled.div`
  z-index: 50;
  
  pointer-events: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none; 

  color: #f0f263;
  font-family: Inter, sans-serif;
  font-size: 1.1em;
  font-weight: 500;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.9);
  white-space: nowrap;
  
  @media (max-width: 800px) {
    font-size: 0.7 em;
    padding-left: 0px;
  }
`;

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
  background: transparent; /* transparent base */
  margin: 0;
  transform-origin: center center;
  transform: translate(-50%, -50%) rotate(-90deg); /* rotates and centers the slider */


  /* Webkit (Chrome, Safari) Track-Styling */
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 8px;
    cursor: pointer;
    border-radius: 4px;
    background: linear-gradient(
      to right, /* 'to right' because the slider is turned 90 degrees */
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
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none; 

  display: inline-block;
  color: #f0f263;
  font-family: Inter, sans-serif;
  font-size: 0.9em;
  font-weight: 500;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.9);
  white-space: nowrap;

  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)}; 
  transition: opacity 0.5s ease-in-out;

  @media (max-width: 800px) {
    font-size: 0.7em;
    padding-left: 0px;
  }
`;

const GalleryDateText = styled.div`
  z-index: 50;
  position: absolute;
  top: 50%;
  left: 50%;
  padding-left: 133px;
  padding-top: 40px;
  transform: translateX(-50%);
  text-align: center;

  pointer-events: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none; 
  
  color: #f0f263;
  font-family: Inter, sans-serif;
  font-size: 0.9em;
  font-weight: 500;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.9);
  white-space: nowrap;
  

  // opacity: ${({ isDateVisible }) => (isDateVisible ? 1 : 0)};
  // transition: opacity 3s ease-in-out 2.5s; 

  @media (max-width: 800px) {
    font-size: 0.7em;
    padding-left: 0px;
  }
`;

const ReloadImagesText = styled.div`
  z-index: 101;
  position: absolute;
  top: 50%;
  left: 50%;
  padding-left: 133px;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;

  pointer-events: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none; 


  display: inline-block;
  color: #f0f263;
  font-family: Inter, sans-serif;
  font-size: 0.8em;
  font-weight: 500;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.9);
  text-decoration: underline;
  white-space: nowrap;

  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)}; 
  transition: opacity 0.5s ease-in-out;

  ${({ isVisible }) => isVisible && `
    pointer-events: auto;
    cursor: pointer;
  `}

  @media (max-width: 800px) {
    font-size: 0.7em;
    padding-left: 0px;
  }
`;

const ContinueHintText = styled.div`
  z-index: 101;
  position: absolute;
  top: 50%;
  left: 50%;
  padding-left: 133px;
  transform: translate(-50%, -50%);

  pointer-events: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none; 

  display: inline-block;
  color: #f0f263;
  font-family: Inter, sans-serif;
  font-size: 0.9em;
  font-weight: 500;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.9);
  white-space: nowrap;

  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)}; 
  transition: opacity 0.5s ease-in-out;

  @media (max-width: 800px) {
    font-size: 0.7em;
    padding-left: 0px;
  }
`;