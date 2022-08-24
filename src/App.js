import styled from "styled-components"
import { Home } from "./Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

const App = () => {
  return(
    <Container>
      <Router>
        <Routes>
          <Route exact path="/" element={ <Home/> } />
        </Routes>
      </Router>
    </Container>
  )
}

export default App;

