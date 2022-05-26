import styled from "styled-components";

const StyledButton = styled.button`
  background: var(--laranja);
  padding: 1rem;
  margin-bottom: 1rem;
  color: var(--branco);
  text-align: left;
  border-radius: 1rem;
  border: 0;
  box-shadow: 4px 4px 2px rgba(0,0,0,.3);
  cursor: pointer;
  :hover {
    background: var(--text);
    box-shadow: 0;
  }
`

export default function Button({children}) {
  return (
    <StyledButton>
      {children}
    </StyledButton>
  )
}