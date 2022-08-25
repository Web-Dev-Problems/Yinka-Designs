import styled from 'styled-components'

export const InfoDesign = () => {
    return(
        <Container>
            <h1>info</h1>
            <p>The most popular platform for publishing.<br/>Promoting your art in the NFT format.</p>
        </Container>
    )
}

const Container = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 70vh;
  h1{
    display: flex;
    flex-direction: row;
    font-size: 7em;
    line-height: 1.5em;
    color: #7d7d7d;
    ::after{
      content: "";
      transform: rotate(15deg) translateX(-50%);
      display: block;
      border-right: 2px solid #000000;
      width: 100px;
      color: #2f2f2f;
    }
  }
  p{
    font-size: 1.1em;
    font-weight: 600;
    line-height: 2em;
    color: #656564;
  }
`