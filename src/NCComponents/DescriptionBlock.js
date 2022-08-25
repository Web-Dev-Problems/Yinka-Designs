import styled from "styled-components"

export const DescriptionBlock = ({title, text}) => {
  return (
    <Container>
      <h1>{title}</h1>
      <p>{text}</p>
    </Container>
  )
}

const Container = styled.div`
  font-size: 2em;
  h1{
    font-size: 1.6em;
    letter-spacing: 0.03em;
    line-height: 1.2em;
  }
  p{
    font-size: 0.65em;
    padding-top: 0.6em;
  }
`
