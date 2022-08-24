// import styled from "styled-components"
import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <div>
        <h1>Templates</h1>
        <ul>
            <li>
                <Link to="/nftcollection">NFT Collection</Link>
            </li>
        </ul>
    </div>
  )
}
