import styled from "styled-components";

const FooterWrapper = styled.footer`
  background: var(--branco); 
  color: var(--text);
  margin: 1rem 0rem 3rem 0rem;
  text-align: center;
`

export default function Footer() {
  return (
    <div>
      <FooterWrapper>
        <p>Eirene © 2022 </p>
      </FooterWrapper>
    </div>
  )
}