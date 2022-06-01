import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import Button from "components/SingleElements/Button";

export default function AboveFold({showVideo}) {
  return (
    <Wrapper>
      <Content>
        <p className="type">Terapia familiar</p>
        <h1>A família é um <em>sistema relacional</em> pertencente a um contexto</h1>
        <p>A especialização em Terapia Familiar e de Casal vai te dar ferramentas efetivas para compreender o funcionamento do sistema familiar.</p>
        <Link href="/cursos/terapia-familiar" passHref>
          <a>
            <Button type="outline">
              Mais informações sobre o curso
            </Button>
          </a>
        </Link>
      </Content>
      <ImageWrapper onClick={() => showVideo({videoId: "lR-ai1r5GTA"})}>
        <Image
          src="/assets/video_main.png"
          width="348"
          height="492"
          alt="Clique para ver o testemunho" />
      </ImageWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  padding: 4rem 0;
  gap: 2rem;
`

const Content = styled.div`

.type {
    font-family: var(--sans);
    font-size: 0.75rem;
    color: var(--laranjaClaro);
    text-transform: uppercase;
    letter-spacing: 2px;
    padding-top: 1rem;
  }
  
  h1 {
    font-family: var(--sans);
    font-size: 2rem;
    margin-bottom: 4rem;
  }

  em {
    background-color: var(--amarelo);
    font-style: normal;
  }
  
  p {
    margin-bottom: 2rem;
    font-family: var(--serif);
    font-size: 1.5rem;
  }
`

const ImageWrapper = styled.div`
  min-width: 350px;
`