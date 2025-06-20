// src/components/scratch-card/ScratchCard.js

import React, { useEffect, useRef, useState, useCallback } from 'react';
import styled from 'styled-components';

const ScratchWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  user-select: none;
  -webkit-user-select: none;
`;

const BottomImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
  object-fit: cover;
`;

const TopCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  cursor: crosshair;

  @media (max-width: 600px) {
    touch-action: none;
  }
`;

const ScratchCard = ({ topImageSrc, bottomImageSrc, onComplete, brushSize }) => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isReady, setIsReady] = useState(false); // State zur Vermeidung der Race Condition
  const isCompleted = useRef(false);

  // Zentrale Funktion, die ein Bild im "cover"-Stil zeichnet
  const drawImageCover = useCallback((context, image) => {
    const canvas = context.canvas;
    const canvasRatio = canvas.width / canvas.height;
    const imageRatio = image.width / image.height;
    let sx = 0, sy = 0, sWidth = image.width, sHeight = image.height;
    if (imageRatio > canvasRatio) {
      sWidth = image.height * canvasRatio;
      sx = (image.width - sWidth) / 2;
    } else {
      sHeight = image.width / canvasRatio;
      sy = (image.height - sHeight) / 2;
    }
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, sx, sy, sWidth, sHeight, 0, 0, canvas.width, canvas.height);
  }, []);

  // Effekt zum initialen Zeichnen eines neuen Bildes
  useEffect(() => {
    setIsReady(false);
    isCompleted.current = false;
    const canvas = canvasRef.current;
    if (!canvas || !canvas.parentElement || !topImageSrc) return;

    const context = canvas.getContext('2d');
    const { width, height } = canvas.parentElement.getBoundingClientRect();
    canvas.width = width;
    canvas.height = height;

    const topImage = new Image();
    topImage.crossOrigin = "anonymous";
    topImage.src = topImageSrc;
    topImage.onload = () => {
      drawImageCover(context, topImage);
      setIsReady(true); // Jetzt ist die Leinwand bereit für Interaktion
    };
  }, [topImageSrc, drawImageCover]);

  // Effekt für die Größenänderung, der den Fortschritt erhält
  useEffect(() => {
    let timeoutId = null;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const canvas = canvasRef.current;
        if (!canvas || !canvas.parentElement) return;

        // Mache einen Schnappschuss, bevor die Größe geändert wird
        const snapshot = new Image();
        snapshot.src = canvas.toDataURL();

        snapshot.onload = () => {
          // Ändere die Größe der Leinwand
          const { width, height } = canvas.parentElement.getBoundingClientRect();
          canvas.width = width;
          canvas.height = height;
          const context = canvas.getContext('2d');
          
          // Zeichne den Schnappschuss mit der gleichen "cover"-Logik, um Verzerrung zu vermeiden
          drawImageCover(context, snapshot);
        };
      }, 150);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [drawImageCover]);


  const getCoordinates = (event) => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const rect = canvas.getBoundingClientRect();
    const touch = event.nativeEvent.touches?.[0];
    const clientX = touch?.clientX ?? event.nativeEvent.clientX;
    const clientY = touch?.clientY ?? event.nativeEvent.clientY;
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    return { x: (clientX - rect.left) * scaleX, y: (clientY - rect.top) * scaleY };
  };

  // Alle Event-Handler prüfen jetzt am Anfang, ob die Leinwand "bereit" ist
  const startDrawing = (event) => {
    if (!isReady) return;
    event.preventDefault();
    setIsDrawing(true);
    const coords = getCoordinates(event);
    if (!coords) return;
    const context = canvasRef.current.getContext('2d');
    context.beginPath();
    context.moveTo(coords.x, coords.y);
  };
  
  const finishDrawing = () => {
    if (!isDrawing || !isReady) return;
    setIsDrawing(false);
    if (isCompleted.current) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    context.closePath();
    const scratchedPercentage = calculateScratchedPercentage(context);

    if (scratchedPercentage > 60) {
      isCompleted.current = true;
      if (onComplete) onComplete(canvasRef.current);
    }
  };

  const draw = (event) => {
    if (!isDrawing || !isReady) return;
    event.preventDefault();
    const coords = getCoordinates(event);
    if (!coords) return;
    const context = canvasRef.current.getContext('2d');
    context.globalCompositeOperation = 'destination-out';
    context.lineWidth = brushSize;
    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.lineTo(coords.x, coords.y);
    context.stroke();
    context.beginPath();
    context.moveTo(coords.x, coords.y);
  };
  
  const calculateScratchedPercentage = (context) => {
    if (!context) return 0;
    const canvas = context.canvas;
    if(canvas.width === 0) return 0;
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height).data;
    const pixelCount = imageData.length / 4;
    if (pixelCount === 0) return 0;
    let transparentPixels = 0;
    for (let i = 3; i < imageData.length; i += 4) {
      if (imageData[i] < 128) transparentPixels++;
    }
    return (transparentPixels / pixelCount) * 100;
  };

  return (
    <ScratchWrapper>
      {bottomImageSrc && <BottomImage src={bottomImageSrc} alt="Hintergrundbild" />}
      <TopCanvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        onTouchStart={startDrawing}
        onTouchEnd={finishDrawing}
        onTouchMove={draw}
      />
    </ScratchWrapper>
  );
};

export default ScratchCard;