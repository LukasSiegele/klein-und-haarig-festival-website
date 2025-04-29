import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import ProductCard from "./ProductCard"

const ProductGrid = ({ products }) => {
  if (!products || products.length === 0) {
    return <NoProductsMessage>No products available at the moment.</NoProductsMessage>;
  }
  
  // Filter out products with zero total stock based on the sizes array
  const availableProducts = products.filter(product => {
    const totalStock = product.sizes?.reduce((sum, size) => sum + size.stock, 0) || 0;
    return totalStock > 0;  // Keep products with any stock available
  });
  
  if (availableProducts.length === 0) {
    return <NoProductsMessage>No products available at the moment.</NoProductsMessage>;
  }
  
  return (
    <GridContainer>
      {availableProducts.map((product, index) => (
        <StyledLink to={`/product/${product.id}`} key={product.id || index}>
          <ProductCard product={product} />
        </StyledLink>
      ))}
    </GridContainer>
  );
}

export default ProductGrid

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 32px;
  width: 100%;
  padding: 24px;
  margin: 0 auto;
  justify-items: start;
  
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
  
  @media (max-width: 1199px) and (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 899px) and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 599px) {
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 16px;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  width: 100%;
`

const NoProductsMessage = styled.div`
  text-align: center;
  padding: 40px;
  color: white;
  font-size: 16px;
  opacity: 0.7;
`
