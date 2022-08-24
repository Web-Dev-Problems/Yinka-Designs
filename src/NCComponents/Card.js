import styled from "styled-components"
import { Button } from "./Button"

export const Card = ({ height, hide, className, imgURL}) => {
  return (
  <Container height={height} className={className}>
      <li className="image">
        <img src={imgURL} alt="NFT"></img>
      </li>
      {
        !hide && 
        <div>
          <li className="description">
            <p>#115 Photograph for Model woman in Banda, Guinea.</p>
          </li>
          <li className="info">
            <p>7.23 ETH - 33,000.7 USD</p>
            <p className="small">1 week left</p>
          </li>
          <li className="button">
            <Button text="View NFT" to="/"/>
            <Button text="Place a bid" dark/>
          </li>
        </div>
      }
    </Container>
  )
}

const Container = styled.ul`
  max-width: 65%;
  >div li, >li{
    background-color: #ffffff;
    &.image{
      height: ${props => props.height || "500px"};
      img{
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
    &.description{
      padding: 10px 9px;
      font-size: 1.2em;
      font-weight: bold;
    }
    &.info{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      font-weight: bold;
      padding: 0 7px 10px;
      .small{
        font-size: 0.8em;
        color: #d6d6d6;
      }
    }
    &.button{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 10px 9px;
      a, button{
        padding: 13px 38px
      }
    }
  }
`
