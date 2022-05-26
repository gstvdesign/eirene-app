import styled from 'styled-components'
import MainHeader from './MainHeader'
import Footer from './Footer'
import NavBar from "./NavBar.js"

const Wrapper = styled.main`
  max-width: 928px;
  min-width: 300px;
  margin: 0 auto;
  padding: 0 1.5rem;
`

export default function MainWrapper({ newHeader, children }) {
  return (
    <div>
      <MainHeader newHeader={newHeader} />
      {!newHeader && <NavBar />}
      <Wrapper>
        { children }
      </Wrapper>
      <Footer />
    </div>
  )
}