import styled from "styled-components";

export default function Excerpt({children}) {
  return <Wrapper> { children } </Wrapper>
}

const Wrapper = styled.div`
  max-width: 928px;
  margin: 0 auto;
  padding: 2rem;
  h1, ul {
    margin-bottom: 1.5rem;
  }
`