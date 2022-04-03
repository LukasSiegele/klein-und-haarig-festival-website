import React, { useState, useEffect } from 'react';

// Wait for Ticker to render so width is displayed correctly because of problem with loading fonts on time.
type Props = {
    children: React.ReactElement;
    waitBeforeShow?: number;
  };
  
  const Delayed = ({ children, waitBeforeShow = 2000 }: Props) => {
    const [isShown, setIsShown] = useState(false);
  
    useEffect(() => {
      console.log(waitBeforeShow);
      setTimeout(() => {
        setIsShown(true);
      }, waitBeforeShow);
    }, [waitBeforeShow]);
  
    return isShown ? children : null;
  };
  
  export default Delayed;