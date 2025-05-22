import React, { useState } from "react"
import styled from "styled-components"
import ToggleButton from "../buttons/ToggleButton"
import { colors } from "../styles/ColorStyles"

const ToggleButtonExample = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedSize, setSelectedSize] = useState("M")
  
  // Example categories and sizes for testing
  const categories = ["All", "T-Shirts", "Hoodies", "Accessories"]
  const sizes = ["S", "M", "L", "XL"]
  
  return (
    <ExampleContainer>
      <ExampleTitle>Toggle Button Examples</ExampleTitle>
      
      <ExampleSection>
        <ToggleButton 
          label="Category:"
          selectedLabel={selectedCategory}
          options={categories}
          defaultSelected={0}
          onChange={(value) => setSelectedCategory(value)}
        />
      </ExampleSection>
      
      <ExampleSection>
        <ToggleButton 
          label="Size:"
          selectedLabel={selectedSize}
          options={sizes}
          defaultSelected={1}
          onChange={(value) => setSelectedSize(value)}
        />
      </ExampleSection>
      
      <ResultSection>
        <ResultText>
          Selected Category: <ResultValue>{selectedCategory}</ResultValue>
        </ResultText>
        <ResultText>
          Selected Size: <ResultValue>{selectedSize}</ResultValue>
        </ResultText>
      </ResultSection>
    </ExampleContainer>
  )
}

export default ToggleButtonExample

const ExampleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 24px;
  background-color: #ffffff;
  border-radius: 8px;
  max-width: 600px;
  margin: 0 auto;
`

const ExampleTitle = styled.p`
  width: 100%;
  font-weight: 500;
  font-size: 0.8em;
  line-height: 1.25;
  color: #ffffff;
  opacity: 0.8;
  flex: none;
  order: 1;
  flex-grow: 0;
`

const ExampleSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const ResultSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
  padding: 16px;
  background-color: #F3F4F6;
  border-radius: 8px;
`

const ResultText = styled.p`
  font-size: 16px;
  color: #000000;
`

const ResultValue = styled.span`
  font-weight: 600;
  color: #000000;
` 