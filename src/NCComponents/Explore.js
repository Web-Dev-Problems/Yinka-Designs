import { Card } from "./Card"
import styled from "styled-components"
import { Button } from "./Button"
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export const Explore = () => {
  return (
    <Container>
      <div className="article">
        <h1>Explore the best <span className="traditionalbackground">NFT</span> collection in <span className="bold">Africa</span></h1>
        <p>Explore the best NFT platform in Africa. Create and trade your digital ART on a secure platform like BRAK</p>
        <ul className="buttons">
          <li>
            <Button text="Explore" dark/>
          </li>
          <li>
            <Button text="Create NFT"/>
          </li>
        </ul>
        <ul className="stats">
          <li>
            <p>27K +</p>
            <p>Artworks</p>
          </li>
          <li>
            <p>20K</p>
            <p>Auctions</p>
          </li>
          <li>
            <p>10K</p>
            <p>Artists</p>
          </li>
        </ul>
      </div>
      <div className="carousel-container">
        <div className="carousel">
          <Card height={"420px"} className="notvisible left" imgURL="/nft-image-2.png" hide/>
          <Card height={"420px"} className="visible" imgURL="/nft-image-1.png"/>
          <Card height={"420px"} className="notvisible right" imgURL="/nft-image-3.png" hide/>
        </div>
        <div className="carousel-button">
          <Button text={<KeyboardArrowLeftIcon sx={{ fontSize: 48 }}/>} dark/>
          <Button text={<KeyboardArrowRightIcon sx={{ fontSize: 48 }}/>} dark/>
        </div>
      </div>

    </Container>
  )
}

const Container = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 40px 0;
  .article{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 15px;
    h1{
      font-size: 3em;
      line-height: 1.5em;
      font-weight: 500;
      span.traditionalbackground{
        font-weight: 600;
        background-image: url("/nft-text-background.png");
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        background-position-x: 23%;
        background-position-y: 24.9%;
      }
      span.bold{
        font-weight: 600;
      }
    }
    > p{
      font-size: 1.5em;
    }
    > ul{
      display: flex;
      flex-direction: row;
      &.buttons{
        li{
          button{
            padding:25px 58px;
            font-size: 1.2em;
          }
          &:nth-of-type(2){
            margin-left: 25px;
          }
        }
      }
      &.stats{
        justify-content: space-between;
        li{
          display: flex;
          flex-direction: column;
          align-items: center;
          p:nth-of-type(1){
            font-size: 2.8em;
            font-weight: 600;
          }
          &:nth-of-type(1){
            margin: 0;
          }
        }
      }
    }
  }
  .carousel{
    position: relative;
    display: flex;
    align-items: center;
    .visible{
      margin: 0 auto;
      z-index: 4;
    }
    .notvisible{
      position: absolute;
      opacity: 0.5;
    }
    .left{
      left: 0;
    }
    .right{
      right: 0;
    }
  }
  .carousel-button{
    padding-top: 20px;
    width: max-content;
    margin: 0 auto;
    button{
      padding: 0;
      &:nth-of-type(2){
        margin-left: 80px
      }
    }
  }
`
