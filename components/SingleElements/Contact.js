import styled from "styled-components";
import Image from "next/image";
import ContactIcon from "/public/assets/icons/contact.svg"

export default function Contact() {
  return (
    <Wrapper>
      <div>
        <Image
          src={ContactIcon.src}
          width={24}
          height={24}
          alt="" />
          <h3>Inscrições, datas ou dúvidas</h3>
      </div>
      <a href="mailto:eirene@eirene.com.br">Escreva para eirene@eirene.com.br</a>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid var(--azulLight);
  padding: 2rem;
  margin: 5rem 0;
  font-size: 1.25rem;
  font-family: var(--sans);
  div {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
  }
  h3 {
    font-family: var(--sans);
    font-weight: 400;
    margin-bottom: 0;
  }
  a {
    color: var(--azul);
    border-bottom: 2px solid;
    font-weight: 700;
  }
`