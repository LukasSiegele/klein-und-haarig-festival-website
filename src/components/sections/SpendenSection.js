import React, { useState } from "react"
import styled from "styled-components"
import TicketCard from "../cards/TicketCard"
import { Link } from "gatsby"
import FormButton from "../buttons/FormButton"

export default function SpendenSection(props) {
  const [isCard1, setIsCard1] = useState(true)
  const [isCard2, setIsCard2] = useState(false)
  const [isCard3, setIsCard3] = useState(false)
  const [isSpende, setIsSpende] = useState("Spende 1")

  return (
    <Wrapper>
      <Content>
        <CardWrapper>
          <TicketCard
            title="Nabu"
            price="Hilf unserer Tier- und Pflanzenwelt."
            details={
              <Link target="_blank" to="https://www.nabu.de/">
                nabu.de
              </Link>
            }
            isSelected={isCard1}
            handleSelection={() => {
              setIsSpende("Spende 1")
              setIsCard1(true)
              setIsCard2(false)
              setIsCard3(false)
            }}
            singleLineDetail={true}
            cardBackground={
              "radial-gradient(circle at 50% 50%, rgba(251,63,239,1) 0%, rgba(252,70,96,1) 100%)"
            }
          />
          <TicketCard
            title="Initiative Musik"
            titleSize="56px"
            price="Supporte Musiker:innnen"
            details={
              <Link target="_blank" to="https://www.initiative-musik.de/">
                initiative-musik.de
              </Link>
            }
            isSelected={isCard2}
            handleSelection={() => {
              setIsSpende("Spende 2")
              setIsCard1(false)
              setIsCard2(true)
              setIsCard3(false)
            }}
            cardBackground={
              "radial-gradient(circle at 50% 50%, rgba(251,63,239,1) 0%, rgba(252,70,96,1) 100%)"
            }
          />
          <TicketCard
            title="Corona Künstler Hilfe"
            titleSize="56px"
            price="Unterstütze Künstler:innen"
            details={
              <Link target="_blank" to="https://www.coronakuenstlerhilfe.de/">
                coronakuenstlerhilfe.de
              </Link>
            }
            isSelected={isCard3}
            handleSelection={() => {
              setIsSpende("Spende 3")
              setIsCard1(false)
              setIsCard2(false)
              setIsCard3(true)
            }}
            singleLineDetail={true}
            cardBackground={
              "radial-gradient(circle at 50% 50%, rgba(251,63,239,1) 0%, rgba(252,70,96,1) 100%)"
            }
          />
        </CardWrapper>
        <ShoppingCartWrapper>
          <SumWrapper />
          <WeiterWrapper>
            <Link
              to="/data"
              state={{ sumTickets: props.summary, spende: isSpende }}
            >
              <FormButton label="Weiter" />
            </Link>
          </WeiterWrapper>
        </ShoppingCartWrapper>
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 0px 40px;
`

const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
`

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 40px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
  }
`

const ShoppingCartWrapper = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  padding: 40px 0 120px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
    justify-content: center;
  }
`

const SumWrapper = styled.div``

const Summary = styled.h4`
  color: white;
`

const WeiterWrapper = styled.div`
  width: 242px;
`
