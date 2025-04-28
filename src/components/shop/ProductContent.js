import React, { useState } from "react"
import styled from "styled-components"
import ToggleButton from "../buttons/ToggleButton"
import PayPalButton  from "../buttons/PaypalButton"

const ProductContent = ({ product }) => {

   // Default to first size or empty string
  const [selectedSize, setSelectedSize] = useState(
    product.sizes && product.sizes.length > 0 ? product.sizes[0].label : ""
  );

  // Format price to always show 2 decimal places
  const formattedPrice = typeof product.price === 'number' 
    ? product.price.toFixed(2) 
    : product.price || "0.00"

  // Handle size change when users select a new size
  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  // Check if product exists
  if (!product) {
    return <ErrorMessage>Sry, this product is not available</ErrorMessage>
  }

  // Check if product has any non-empty sizes
  const hasSizes = product.sizes?.some(size => size.stock > 0);

  return (
    <ProductContentContainer>
      <DescriptionGroup>
        <ProductName>{product.name || "Product Name"}</ProductName>
        <ProductDescription>{product.longDescription || "No description available"}</ProductDescription>
      </DescriptionGroup>

      <Price>{formattedPrice} €</Price>

      {hasSizes && (
        <SizeSelector>
          <ToggleButton 
            label="Size" 
            selectedLabel={selectedSize}
            options={product.sizes}
            onChange={handleSizeChange}
          />
        </SizeSelector>
      )}
      {product.price > 0 && (
        <PayPalButtonWrapper>
          <PayPalButton 
            amount={formattedPrice}
            selectedSize={selectedSize}
            productName={product.name}
            onSuccess={(details) => console.log("Payment complete!", details)} />
        </PayPalButtonWrapper>
      )}
    </ProductContentContainer>
  )
}

export default ProductContent

const ProductContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 10%;
  gap: 24px;
  position: relative;
  width: 100%;
  max-width: 1408px;
  height: auto;
`

const DescriptionGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 100%;
  height: auto;
`

const ProductName = styled.h3`
  width: 100%;
  font-weight: 600;
  font-size: 1.6em;
  color: #ffffff;
`

const ProductDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.9em;
  color: #ffffff;
  opacity: 0.8;
`

const Price = styled.p`
  font-weight: 600;
  font-size: 0.9em;
  color: #ffffff;
`

const PayPalButtonWrapper = styled.div`
  width: 100%;
  margin-top: 24px;
  flex: none;
  display: flex;
  justify-content: flex-start;
`

const SizeSelector = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 100%;
`

const ErrorMessage = styled.div`
  color: #ffffff;
  font-size: 1.2em;
  padding: 16px;
  text-align: center;
  width: 100%;
`
