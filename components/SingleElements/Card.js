import Image from "next/image"
import Link from "next/link"
import styled from "styled-components"
import Button from "/components/SingleElements/Button"

const CardWrapper = styled.div`
  box-shadow: 5px 5px 5px rgba(0, 0, 0, .3);
  border: 1px solid #ccc;
  border-top: 3px solid var(--laranja);
  transition: all .2s ease-in-out;
  display: flex;
  color: var(--text);
  text-decoration: none;
  margin: 5rem 0;
  cursor: pointer;
  :hover {
    border-top: 10px solid var(--laranja);
    transform: scale(1.03);
  }
`
const CardImage = styled.div`
  min-width: 440px;
  padding: 1rem;
`
const Content = styled.div`
  padding: .5rem 1rem 0 1rem;  
  h4 {
    color: var(--laranja);
  }
  div {
    margin-bottom: 1rem;
  }
`
export default function Card({props}) {
  const { type, slug, img, title, excerpt } = props
  return (
    <Link href={`${type}/${slug}`}>
      <CardWrapper>
        <CardImage>
          <Image
            src={`/assets/${type}/${img}`}
            width={440}
            height={295}
            alt={title} />
        </CardImage>
        <Content>
          <h4>{title}</h4>
          <div>{excerpt}</div>
          <Button>Quero saber mais sobre o Curso de {title}</Button>
        </Content>
      </CardWrapper>
    </Link>
  )
}