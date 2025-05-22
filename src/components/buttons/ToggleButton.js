import React, { useState } from "react"
import styled from "styled-components"

const ToggleButton = ({ 
  label, 
  selectedLabel, 
  options, 
  defaultSelected = 0,
  onChange
}) => {
  const [activeIndex, setActiveIndex] = useState(defaultSelected)

  const handleToggle = (index) => {
    if (options[index].stock > 0) { // only allow selecting if stock available
      setActiveIndex(index)
      if (onChange) {
        onChange(options[index].label) // Pass only the label back (S, M, L, XL)
      }
    }
  }

  return (
    <ToggleButtonContainer>
      <ToggleButtonLabels>
        <ToggleButtonLabel>{label}</ToggleButtonLabel>
        {selectedLabel && (
          <ToggleButtonLabelSelected>{selectedLabel}</ToggleButtonLabelSelected>
        )}
      </ToggleButtonLabels>
      
      <ToggleButtonsGroup>
        {options.map((option, index) => {
          const isOutOfStock = option.stock <= 0;
          return (
            <SingleToggleButton
              key={index}
              isActive={index === activeIndex}
              disabled={isOutOfStock}
              onClick={() => handleToggle(index)}
            >
              <ToggleButtonText isActive={index === activeIndex} isDisabled={isOutOfStock}>
                {option.label} {isOutOfStock ? "(Empty)" : ""}
              </ToggleButtonText>
            </SingleToggleButton>
          )
        })}
      </ToggleButtonsGroup>
    </ToggleButtonContainer>
  )
}

export default ToggleButton


const ToggleButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  position: relative;
  width: 100%;
  max-width: 471px;
  height: auto;
`

const ToggleButtonLabels = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 4px;
  width: 100%;
  height: 20px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`

const ToggleButtonLabel = styled.p`
  font-weight: 500;
  font-size: 0.8em;
  line-height: 20px;
  color: #6B7280;
  flex: none;
  order: 0;
  flex-grow: 0;

   &:hover {
    color: "#B4B9C1"};
  }
`

const ToggleButtonLabelSelected = styled.p`
  font-weight: 500;
  font-size: 0.8em;
  line-height: 20px;
  color: #ffffff;
  flex: none;
  order: 1;
  flex-grow: 0;
`

const ToggleButtonsGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;
  width: 100%;
  height: 40px;
  flex: none;
  order: 1;
  flex-grow: 0;
  
  @media (max-width: 600px) {
    flex-wrap: wrap;
    height: auto;
    gap: 8px;
  }
`

const SingleToggleButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 8px;
  height: 40px;
  background: ${props => props.isActive ? "#ffffff" : "#000000"};
  border-radius: 8px;
  border: 1px solid ${props => props.isActive ? "#000000" : "#6B7280"};
  cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
  opacity: ${props => props.disabled ? 0.4 : 1};
  pointer-events: ${props => props.disabled ? "none" : "auto"};
  transition: all 0.2s ease;

  &:hover {
    border: 1px solid ${props => props.isActive ? "#000000" : "#B4B9C1"};
  }

  @media (max-width: 600px) {
    flex: none;
    min-width: 0;
  }
`

const ToggleButtonText = styled.span`
  font-weight: 500;
  font-size: 16px;
  color: ${props => props.isDisabled ? "#6B7280" : props.isActive ? "#000000" : "#6B7280"};
`
