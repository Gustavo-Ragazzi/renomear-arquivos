import MainContainer from './components/MainContainer'
import SearchContainer from './components/SearchContainer'
import styled from "styled-components"

const AppContainer = styled.body`
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  background-color: #282b30;
`

function App() {
  return (
    <AppContainer>
      <MainContainer />
      <SearchContainer />
    </AppContainer>
  )
}

export default App
