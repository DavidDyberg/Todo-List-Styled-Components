import styled from "styled-components"
import './index.css'
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { TodoList } from "./components/Todo-list"

export const Container = styled.div`
  height: 100vh;
  background-color: #17181f;;
  margin: 0;
  
  
`

function App() {
  return (
    <>
    
    <Container>
    <Header />
      <TodoList/>
      
    </Container>
    <Footer />
    
    </>
  )
}

export default App