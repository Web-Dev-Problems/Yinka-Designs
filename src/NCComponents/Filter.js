import styled from "styled-components"
import { Button } from "./Button"
import EastIcon from '@mui/icons-material/East';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export const Filter = () => {
  return (
    <Container>
      <ul>
        <li>
          <Button text={["Most Viewed", <EastIcon key={0}/>]} dark/>
        </li>
        <li>
          <Button text={["Recommended", <EastIcon key={0}/>]} />
        </li>
        <li>
          <Button text={["Trending", <EastIcon key={0}/>]} />
        </li>
        <li>
          <Button text={["Arts & Painting", <EastIcon key={0}/>]} />
        </li>
      </ul>
      <Button text={["See More", <ArrowBackIosIcon key={0}/>]} />
    </Container>
  )
}

const Container = styled.div`
  height: 500px;
  overflow-y: scroll;
  padding-bottom: 100px;
  scrollbar-width: thin;          /* "auto" or "thin" */
  scrollbar-color: #d9d9d9 #fff;
  ::-webkit-scrollbar {
    width: 8px;               /* width of the entire scrollbar */
  }

  ::-webkit-scrollbar-track {
    background: #fff;        /* color of the tracking area */
    border-radius: 20px;
    border:1px solid #d9d9d9;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #d9d9d9;    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
  }
  ul{
    display: grid;
    grid-row-gap: 1em;
    padding-bottom: 3em;
    button{
      justify-content: space-between;
    }
  }
  button{
    font-size: 1.02em;
    padding: 25px 25px;
    width: 90%;
    letter-spacing: 0.03em;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
  }
  > button{
    justify-content: center;
    svg{
      transform: rotate(-90deg) translate(6px, 6px);
    }
  }
`
