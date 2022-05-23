import Link from "next/link"
import styled from "styled-components"

const ArtigosWrapper = styled.div`
  h3{
    color: var(--azulMedio);
  }
`
export default function Artigos({props}) {
  const { meta, content } = props
  const { slug, title } = meta
  let excerpt = content.split('\n')[0]
  return (
    <ArtigosWrapper>
      <div>
        <h3>{ title }</h3>
        <p dangerouslySetInnerHTML={{ __html: excerpt }} />
        <Link href={ `artigos/${slug}` }>
          <a>Quero ler mais…</a>
        </Link>
      </div>
    </ArtigosWrapper>
  )
}