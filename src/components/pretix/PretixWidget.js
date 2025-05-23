import React, { useEffect } from 'react';
import styled from 'styled-components'; // Optional for styling

// Wrapper to style pretix widget
const WidgetWrapper = styled.div`
  margin-top: 24px;
  padding: 15px;
  border: 1px solid #333;
  border-radius: 8px;
  background-color: #1c1c1c;

  h3 {
    color: #fff;
    margin-bottom: 15px;
  }
`;

const PretixWidget = ({ eventUrl }) => {
  useEffect(() => {
    const scriptId = 'pretix-widget-script';
    let script = document.getElementById(scriptId);

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'text/javascript';
      script.src = 'https://pretix.eu/widget/v1.en.js'; // .en.js for english
      script.async = true;
      document.body.appendChild(script);

      // Wichtig: Cleanup-Funktion, um das Skript zu entfernen, wenn die Komponente nicht mehr da ist
      return () => {
        const loadedScript = document.getElementById(scriptId);
        if (loadedScript && loadedScript.parentNode) {
          loadedScript.parentNode.removeChild(loadedScript);
        }
      };
    }
  }, []); // Leeres Array, damit der Effekt nur einmal beim Mounten ausgeführt wird

  if (!eventUrl) {
    return <p style={{color: "#fff", marginTop: "20px"}}>Ticket-Verkaufsinformationen werden geladen oder sind nicht verfügbar.</p>;
  }

  return (
    <WidgetWrapper>
      {/* Du kannst hier optional noch eine Überschrift oder Text hinzufügen */}
      {/* <h3>Tickets hier kaufen:</h3> */}
      <pretix-widget event={eventUrl}></pretix-widget>
    </WidgetWrapper>
  );
};

export default PretixWidget;