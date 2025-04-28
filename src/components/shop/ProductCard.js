import React from "react"
import styled from "styled-components"
import { TextSmall, StyledText } from "../styles/TextStyles"

const ProductCard = ({ product }) => {
  // Calculate total stock based on all sizes
  const totalStock = product.sizes?.reduce((sum, size) => sum + size.stock, 0) || 0;

  // Don't render if all sizes are out of stock
  if (totalStock === 0) {
    return null;
  }

  // Format price to always show 2 decimal places
  const formattedPrice = typeof product.price === 'number' 
    ? product.price.toFixed(2) 
    : product.price

  return (
    <Card>
      <CardImage 
        style={{ backgroundImage: `url(/${product.cardImage || "images/placeholder.png"})` }}
        alt={product.name}
      />
      <CardContent>
        <TextContent>
          <ProductName>{product.name}</ProductName>
          <ProductDescription>{product.shortDescription}</ProductDescription>
        </TextContent>
        <PriceContainer>
          <Price>{formattedPrice} €</Price>
        </PriceContainer>
      </CardContent>
    </Card>
  )
}

export default ProductCard

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  width: 100%;
  height: auto;
  background: transparent;
  overflow: hidden;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
  }
`

const CardImage = styled.div`
  width: 100%;
  padding-top: 100%; /* 1:1 aspect ratio */
  background-size: cover;
  background-position: center;
`

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
  height: auto;
`

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 100%;
  height: auto;
`

const ProductName = styled.h3`
  color: white;
  font-size: 1.2em;
  font-weight: 500;
`

const ProductDescription = styled.p`
  color: white;
  opacity: 0.7;
  font-size: 0.9em;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
`

const PriceContainer = styled.div`
  color: white;
`

const Price = styled(StyledText)`
  font-size: 0.9em;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
` 