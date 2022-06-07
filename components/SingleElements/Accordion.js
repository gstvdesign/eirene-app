import { useState } from 'react';
import Image from 'next/image';
import styled from "styled-components";
import PlusIcon from "/public/assets/icons/plus.svg"

export default function Accordion({ info }) {
  const [whichItem, setWhichItem] = useState(-1)
  function toggleContent(item) {
    const isOpen = whichItem === item ? -1 : item
    setWhichItem(isOpen)
  }
  return (
    <Wrapper>
      <h2>Informações Práticas</h2>
      { info.map(({title, text}, index) => {
        return (
          <ItemWrapper key={index}>
            <Title onClick={() => toggleContent(index)}>
              <IconWrapper open={index === whichItem} >
                <Image
                  src={PlusIcon.src}
                  width={16}
                  height={16}
                  alt={whichItem ? 'Esconder texto' : 'Mostrar texto'} />
              </IconWrapper>
              <h3>{title}</h3>
            </Title>
            <Content open={whichItem === index}>{text}</Content>
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
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-right: 2rem;
  padding-left: 1rem;
  margin-bottom: 1rem;
  
  ul {
    margin-bottom: 2rem;
  }
`

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  h3 {
    font-family: var(--sans);
    font-weight: 400;
    margin-bottom: 0;
  }
`

const IconWrapper = styled.div`
  transform: ${props => props.open ? 'rotate(45deg)' : 'rotate(0)'};
  transition: all 0.5s;
`

const Content = styled.div`
  opacity: ${props => props.open ? '1' : '0'};
  max-height: ${props => props.open ? '200px' : '0'};
  transition: all 0.5s;
  padding-top: ${props => props.open ? '1rem' : '0'};
  padding-left: 2rem;
`