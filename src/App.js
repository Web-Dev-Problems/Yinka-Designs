import styled from "styled-components"
import { Home } from "./Home"
import { ReferenceHolder } from "./templates/ReferenceHolder"
import { NftCollection } from "./templates/NftCollection"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

const App = () => {
  return(
    <Container>
      <Router>
        <Routes>
          <Route exact path="/" element={ <Home/> } />
          <Route exact path="/nftcollection" element={ <NftCollection/> } />
          <Route exact path="/nftcollectionreference" element={ <ReferenceHolder imageURL="/nft-collection-1.png"/>} />
        </Routes>
      </Router>
    </Container>
  )
}

export default App;

const Container = styled.div``
