import styled from "styled-components";

export default function Footer({ newFooter }) {
  return newFooter 
    ? (
      <FooterWrapper>
        <div>
          <p className="contact">Inscrições, datas ou dúvidas</p>
          <p>
            <a href="mailto:eirene@eirene.com.br">eirene@eirene.com.br</a>
          </p>
        </div>
        <p>Eirene © 2022</p>
      </FooterWrapper>
    )
    : (
      <OldFooter>
        <p>Eirene © 2022 </p>
      </OldFooter>
  )
}
const FooterWrapper = styled.footer`
  background: var(--laranjaClaro);
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  padding: 2rem;
  color: var(--white);
  font-family: var(--sans);
  a {
    color: var(--white);
  }
`

const OldFooter = styled.footer`
  background: var(--branco); 
  color: var(--text);
  margin: 1rem 0rem 3rem 0rem;
  text-align: center;
`