import { useState } from 'react';
import Image from 'next/image';
import styled from "styled-components";
import PlusIcon from "/public/assets/icons/plus.svg"
import CloseIcon from "/public/assets/icons/close.svg"

export default function Accordion({ info }) {
  const [showText, setShowText] = useState(false)
  return (
    <Wrapper>
      <h2>Informações Práticas</h2>
      { info.map(({title, text}, index) => {
        return (
          <ItemWrapper key={index}>
            <Title onClick={() => setShowText(index)}>
              <span>
                <Image
                  src={showText ? CloseIcon.src : PlusIcon.src}
                  width={16}
                  height={16}
                  alt={showText ? 'Esconder texto' : 'Mostrar texto'} />
              </span>
              <h3>{title}</h3>
            </Title>
            {showText === index && <p id={index}>{text}</p>}
          </ItemWrapper>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-bottom: 4rem;
`
const ItemWrapper = styled.div`
  background-color: var(--azulLight);
  border-radius: 4px;
  border-left: 3px solid var(--azul);
  padding: 1rem 2rem;
  margin-bottom: 1rem;
  
  ul {
    margin-bottom: 2rem;
  }
`

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  h3 {
    font-family: var(--sans);
    font-weight: 400;
    margin-bottom: 0;
  }
`