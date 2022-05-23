import styled from 'styled-components'
import MainHeader from './MainHeader'
import Footer from './Footer'
import NavBar from "./NavBar.js"

const Wrapper = styled.main`
  max-width: 928px;
  margin: 0 auto;
`

export default function MainWrapper({ children }) {
  return (
    <div>
      <MainHeader />
      <NavBar />
      <Wrapper>
        { children }
      </Wrapper>
      <Footer />
    </div>
  )
}