// ProductContent.js - Überarbeitet

import React, { useState } from "react";
import styled from "styled-components";
import ToggleButton from "../buttons/ToggleButton";
import PayPalButton from "../buttons/PaypalButton";
import { supabase } from "../../utils/supabaseClient"; // <-- Supabase Client importieren
import { navigate } from "gatsby"; // <-- Gatsby Navigation importieren

const ProductContent = ({ product }) => {

  const [selectedSize, setSelectedSize] = useState(
    product.sizes && product.sizes.length > 0 ? product.sizes[0].label : ""
  );

  // Preis formatieren
  const formattedPrice = typeof product.price === 'number'
    ? product.price.toFixed(2)
    : product.price || "0.00";

  // Größenänderung behandeln
  const handleSizeChange = (sizeLabel) => { // Hier kommt das Label (z.B. "M") an
    setSelectedSize(sizeLabel);
  };

  // === NEUER Handler für erfolgreichen Kauf ===
  const handlePurchaseSuccess = async (paypalDetails) => {
    console.log("PayPal Success, processing purchase...", paypalDetails);

    // Sicherstellen, dass eine Größe ausgewählt ist (wichtig!)
    if (!selectedSize) {
       console.error("Keine Größe für den Kauf ausgewählt!");
       alert("Bitte wähle zuerst eine Größe aus.");
       return; // Funktion abbrechen
    }
    // Sicherstellen, dass die product ID vorhanden ist
    if (!product || !product.id) {
        console.error("Produkt oder Produkt-ID fehlt!");
        alert("Ein interner Fehler ist aufgetreten (Produkt-ID fehlt).");
        return;
    }

    try {
        console.log(`Versuche Stock-Update für Produkt ${product.id}, Größe ${selectedSize}`);
        // Rufe die deployte Edge Function 'decrement-stock' auf
        const { data: updateResult, error: functionError } = await supabase.functions.invoke(
            'decrement-stock', // Name der Edge Function
            {
                body: { productId: product.id, sizeLabel: selectedSize }, // Daten senden
            }
        );

        // Fehlerbehandlung für den Aufruf und die Funktion
        if (functionError) throw functionError;
        if (updateResult && !updateResult.success) {
           throw new Error(updateResult.error || 'Stock update failed.');
        }

        console.log('Stock update erfolgreich:', updateResult);

        // Zur Danke-Seite weiterleiten
        navigate(`/thanks/`);

    } catch (error) {
        console.error('Fehler bei der Kaufverarbeitung nach Zahlung:', error);
        alert(`Zahlung erfolgreich, aber Problem beim Buchen des Artikels: ${error.message}. Fehler wurde geloggt. Du musst nichts weiter tun.`);
        // Trotzdem weiterleiten, da die Zahlung durch ist. Der Fehler muss manuell geprüft werden.
        navigate(`/thanks/`);
    }
  };
  // === ENDE NEUER Handler ===


  // Check if product exists
  if (!product) {
    return <ErrorMessage>Sorry, dieses Produkt ist nicht verfügbar.</ErrorMessage>;
  }

  // Check if product has any sizes mit Stock > 0 (uses product.sizes)
  const hasSizesWithStock = product.sizes?.some(sizeInfo => sizeInfo.stock > 0);
  const hasAnySizes = product.sizes && product.sizes.length > 0;


  return (
    <ProductContentContainer>
      <DescriptionGroup>
        <ProductName>{product.name || "Produktname"}</ProductName>
        <ProductDescription>{product.longDescription || "Keine Beschreibung verfügbar."}</ProductDescription>
      </DescriptionGroup>

      <Price>{formattedPrice} €</Price>

      {/* Zeige Größenauswahl nur an, wenn Größen vorhanden sind */}
      {hasAnySizes && (
        <SizeSelector>
          <ToggleButton
            label="Größe" // Oder "Ausführung" für One-Size-Artikel
            selectedLabel={selectedSize}
            // Übergebe das korrigierte product.sizes Array
            options={product.sizes}
            onChange={handleSizeChange} // Diese Funktion setzt selectedSize
          />
        </SizeSelector>
      )}

      {/* Zeige PayPal Button nur an, wenn eine Größe ausgewählt wurde UND Stock verfügbar ist (oder keine Größenwahl nötig ist) */}
      {/* Logik: Wenn es Größen gibt, muss eine gewählt sein. Wenn nicht, ist es ok. Und Preis > 0 */}
      {product.price > 0 && (!hasAnySizes || selectedSize) ? (
        <PayPalButtonWrapper>
          <PayPalButton
            amount={formattedPrice} // Preis übergeben
            selectedSize={selectedSize} // Ausgewählte Größe übergeben
            productName={product.name} // Produktname übergeben
            onSuccess={handlePurchaseSuccess} // <<< NEUEN Handler übergeben!
          />
        </PayPalButtonWrapper>
      ) : (
         // Optional: Nachricht anzeigen, wenn keine Größe gewählt oder alles ausverkauft
         hasAnySizes && !selectedSize && <InfoMessage>Bitte wähle eine Größe.</InfoMessage>
      )}
       {!hasSizesWithStock && hasAnySizes && <InfoMessage>Dieses Produkt ist leider ausverkauft.</InfoMessage>}

    </ProductContentContainer>
  );
};

export default ProductContent;

// --- Styled Components (unverändert) ---
const ProductContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 10%; /* Ggf. anpassen */
  gap: 24px;
  position: relative;
  width: 100%;
  max-width: 1408px; /* Ggf. anpassen */
  height: auto;
`;

const DescriptionGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 100%;
  height: auto;
`;

const ProductName = styled.h3`
  width: 100%;
  font-weight: 600;
  font-size: 1.6em;
  color: #ffffff;
`;

const ProductDescription = styled.p`
  font-family: 'Inter', sans-serif; /* Oder deine Schriftart */
  font-size: 0.9em;
  color: #ffffff;
  opacity: 0.8;
  white-space: pre-wrap; /* Umbrüche aus Supabase anzeigen */
`;

const Price = styled.p`
  font-weight: 600;
  font-size: 0.9em;
  color: #ffffff;
`;

const PayPalButtonWrapper = styled.div`
  width: 100%;
  margin-top: 24px;
  display: flex;
  justify-content: flex-start; /* Button linksbündig */
  align-items: center;

  /* Begrenzt die Breite des PayPal Buttons selbst, falls nötig */
  & > div { /* Zielt auf den div-Container von PayPal */
    width: 100%; /* Oder eine feste Breite wie max-width: 300px; */
    max-width: 400px;
  }
`;

const SizeSelector = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 100%;
`;

const ErrorMessage = styled.div`
  color: #ff6b6b; /* Rote Farbe für Fehler */
  font-size: 1em;
  padding: 16px 0;
  text-align: left;
  width: 100%;
`;
const InfoMessage = styled.div`
  color: #ffffff;
  opacity: 0.7;
  font-size: 0.9em;
  padding: 16px 0;
  text-align: left;
  width: 100%;
`;