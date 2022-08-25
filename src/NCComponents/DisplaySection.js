import styled from "styled-components"
import { Display } from "./Display"
import { DescriptionBlock } from "./DescriptionBlock"

export const DisplaySection = () => {
  return (
    <Container>
        <DescriptionBlock 
          title={["Welcome to the Logo", <br key={0}/>, "NFT MArket Place"]}
          text={["Welcome to Africa's best virtual store for digital assets.", <br key={0}/>,"Here you can search and buy creator's assets from AIRBNB"]}
        />
        <Display />
    </Container>
  )
}

const Container = styled.section``