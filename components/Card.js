import Image from "next/image"
import styled from "styled-components"

const CardWrapper = styled.a`
  box-shadow: 5px 5px 5px rgba(0, 0, 0, .3);
  border-top: solid 3px var(--laranja);
  transition: all .2s ease-in-out;
  border: 1px solid #ccc;
  display: flex;
  h4 {
    color: var(--laranja);
  }
`
export default function Card({props}) {
  const { type, slug, img, title, excerpt } = props
  return (
    <CardWrapper href={`${type}/${slug}`}>
      <Image src={`/assets/${type}/${img}`} width="440px" height="295px"  alt={title}/>
      <div>
        <h4>{title}</h4>
        {excerpt}
        <button>Quero saber mais sobre o Curso de {title}</button>
      </div>
    </CardWrapper>
  )
}