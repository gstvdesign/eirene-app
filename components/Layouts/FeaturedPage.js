import Image from "next/image";
import styled from "styled-components";

export default function Inscreva(props) {
  return (
    <Wrapper title={props.title}>
    { props.title !== 'Terapia Familiar e de Casal' && ( 
      <>
        <h2>{props.title}</h2>
        {props.img && <img src={ `/assets/${props.type}/${props.img}` } width="600px" height="400px" alt={props.title} />}
      </>
    )}
      <div dangerouslySetInnerHTML={{ __html: props.content }} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  h2 {
    color: ${props => props.title === 'Terapia Familiar e de Casal' ? 'var(--laranjaClaro)' : 'var(--azul)'};
  }
`