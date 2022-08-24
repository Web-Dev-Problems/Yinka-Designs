import styled from "styled-components"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

const App = () => {
  return(
    <Container>
      <Router>
        <Routes>
          <Route exact path="/" element={ <div>Hey Yinka! It's tomiwa</div> } />
        </Routes>
      </Router>
    </Container>
  )
}

export default App;

const AppContainer = styled.div``
