import styled from "styled-components"

export const ReferenceHolder = ({ imageURL }) => {
  return (
    <Container>
      <img src={ imageURL } alt="reference"/>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  img{
    width: 100%;
    /* object-fit: contain; */
  }
`