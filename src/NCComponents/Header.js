import styled from "styled-components"
import { NavLink } from "react-router-dom"
import { Button } from "./Button";
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const Header = () => {
  return (
  <Container>
    <li className="logo">
      <p>Logo</p>
    </li>
    <li className="links">
      <ul>
        <li className="home">
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/">Explore</NavLink>
          <KeyboardArrowDownIcon />
        </li>
        <li>
          <NavLink to="/">Market&nbsp;Place</NavLink>
          <KeyboardArrowDownIcon />
        </li>
        <li>
          <NavLink to="/">Art&nbsp;works</NavLink>
          <KeyboardArrowDownIcon />
        </li>
        <li>
          <NavLink to="/">Creators</NavLink>
          <KeyboardArrowDownIcon />
        </li>
        <li>
          <NavLink to="/">Community</NavLink>
          <KeyboardArrowDownIcon />
        </li>
        <li>
          <NavLink to="/">Blogs</NavLink>
          <KeyboardArrowDownIcon />
        </li>
      </ul>
    </li>
    <li className="buttons">
      <ul>
        <li className="searchcontainer">
          <SearchIcon sx={{ fontSize: 32 }}/>
        </li>
        <li className="buttoncontainer">
          <Button text="Sign Up"/>
        </li>
        <li className="buttoncontainer dark">
          <Button text="Log In" dark/>
        </li>
      </ul>
    </li>
  </Container>
  )
}

const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(12,1fr);
  padding: 35px 0 25px 0;
  > li ul{
    display: flex;
    flex-direction: row;
    height: 100%;
    align-items: center;
  }
  .logo{
    display: flex;
    align-items: center;
  }
  .links{
    grid-column: 2 / span 8;
    > ul{
      padding-left: 50px;
      justify-content: space-between;
      > li{
        cursor: pointer;
        margin: 0 20px;
        font-size: 0.88em;
        display: flex;
        flex-direction: row;
        align-items: center;
        &.home{
          flex-direction: column;
          margin: 0;
          padding: 0 5px;
          a{
            padding: 0 15px;
          }
          ::after{
            content: '';
            border-top: 2px solid #000000;
            width: 100%;
            height: 2px;
            display: block;
            position: relative;
          }
        }
      }
    }
  }
  .buttons{
    grid-column: 10 / 13 ;
    ul{
      padding-left: 20px;
      justify-content: space-between;
      li{
        cursor: pointer;
        align-items: center;
        &.searchcontainer{
          height: 100%;
          display: flex;
        }
      }
    }
  }
`