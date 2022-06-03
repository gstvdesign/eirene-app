import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import Button from "components/SingleElements/Button";
import testemunhosData from '_data/_index/testemunhos'

const { testemunhosData: testemonials } = testemunhosData

export default function AboveFold({showVideo}) {
  const mainVideo = testemonials.filter(el => el.main)[0].videoId
  return (
    <Wrapper>
      <Content>
        <p className="type">Curso em Terapia familiar</p>
        <h1>Uma <em>visão sistemêmica</em> sobre a família</h1>
        <p>A especialização em Terapia Familiar e de Casal vai te dar ferramentas efetivas para compreender o funcionamento do sistema familiar.</p>
        <Link href="/cursos/terapia-familiar" passHref>
          <a>
            <Button type="outline">
              Mais informações sobre o curso
            </Button>
          </a>
        </Link>
      </Content>
      <ImageWrapper 
        bgImg={`https://img.youtube.com/vi/${mainVideo}/hqdefault.jpg`}
        onClick={() => showVideo({videoId: mainVideo})}>
          <span className="circle"><span className="triangle"></span></span>
      </ImageWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  padding: 4rem 0;
  gap: 2rem;
  @media screen and (max-width: 760px) {
    flex-direction: column;
  }
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
  @media screen and (max-width: 760px) {
    padding: 1rem;
  }
`

const ImageWrapper = styled.div`
  background: url(${props => props.bgImg});
  background-size: cover;
  background-position: center;
  min-width: 350px;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  .circle {
    background-color: var(--white);
    width: 65px;
    height: 65px;
    border-radius: 65px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .triangle {
    display: inline-block;
    width: 0;
    height: 0;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-left: 35px solid var(--azul);
    transform: translate(10%, -5%);
  }
`