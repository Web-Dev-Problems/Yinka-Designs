import styled from "styled-components"
import { Button } from "./Button"
import { Filter } from "./Filter"
import { Card } from "./Card"

export const Display = () => {
  return (
    <Container>
      <Filter />
      <div className="nftcollection">
        <ul>
          <Card height={"280px"} className="visible" imgURL="/nft-image-1.png"/>
          <Card height={"280px"} className="visible" imgURL="/nft-image-1.png"/>
          <Card height={"280px"} className="visible" imgURL="/nft-image-1.png"/>
          <Card height={"280px"} className="visible" imgURL="/nft-image-1.png"/>
          <Card height={"280px"} className="visible" imgURL="/nft-image-1.png"/>
          <Card height={"280px"} className="visible" imgURL="/nft-image-1.png"/>
        </ul>
        <Button to="/" text="View all" />
      </div>
    </Container>
  )
}

const Container = styled.section`
  padding-top: 5em;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 24px;
  > .nftcollection{
    display: flex;
    flex-direction: column;
    align-items: center;
    > ul{
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 40px 22px;
      padding-bottom: 48px;
      > ul.visible{
        max-width: 100%;
        img{
          object-fit: contain;
        }
        a, button{
          padding: 15px 27px
        }
      }
    }
    > a{
      font-size: 1.4em;
      font-weight: 500;
      padding: 15px 50px;
    }
  }
`