import styled from "styled-components"
import { Link } from "react-router-dom"
import { Header } from "../NCComponents/Header"
import { Explore } from "../NCComponents/Explore"
import { InfoDesign } from "../NCComponents/InfoDesign"
import { DisplaySection } from "../NCComponents/DisplaySection"

export const NftCollection = () => {
  return (
    <Container>
      <Link to="/nftcollectionreference" id="aside" target="_blank" rel="noopener noreferrer">reference</Link>
      <div>
        <Header />
        <Explore />
        <InfoDesign />
        <DisplaySection />
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(204 204 204 / 23%);
  > div{
    max-width: 1300px;
    min-width: 400px;
  }
  #aside{
    position: fixed;
    bottom: 20px;
    right: 20px;
  }  
`
