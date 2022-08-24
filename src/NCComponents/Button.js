import styled from "styled-components"
import { Link } from "react-router-dom"
export const Button = ({ text, to, dark }) => {
  if(to){
    return <LinkContainer to={to} className={dark? "dark" : "light"}>{ text }</LinkContainer>
  }
  return <ButtonContainer className={dark? "dark" : "light"}>{ text }</ButtonContainer>
}

const ButtonContainer = styled.button`
  border: 1.5px solid #000000;
  padding: 15px 27px;
  font-weight: 600;
  &.dark{
    background-color: #000000;
    color: #ffffff;
  }
`

const LinkContainer = styled(Link)`
  display: block;
  border: 1.5px solid #000000;
  padding: 15px 27px;
  font-weight: 600;
  width: max-content;
  &.dark{
    background-color: #000000;
    color: #ffffff;
  }
`