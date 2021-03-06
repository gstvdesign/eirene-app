import styled from 'styled-components'
import MainHeader from 'components/PageElements/MainHeader'
import Footer from 'components/PageElements/Footer'
import NavBar from "components/PageElements/NavBar.js"

const Wrapper = styled.main`
  max-width: 760px;
  min-width: 300px;
  margin: 0 auto;
  /* padding: 0 1.5rem; */
`

export default function MainWrapper({ newLayout, title, children }) {
  return (
    <div className='wrapper'>
      <MainHeader newHeader={newLayout} title={title} />
      {!newLayout && <NavBar />}
      <Wrapper>
        { children }
      </Wrapper >
      <Footer newFooter={newLayout}/>
    </div>
  )
}