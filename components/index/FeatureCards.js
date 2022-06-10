import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import Button from "components/SingleElements/Button";
import Arrow from "public/assets/icons/left-arrow.svg"

const cardsData = [
  {
    img: 'assessor.jpg',
    type: 'Especialização',
    title: 'Assessor familiar',
    content: 'Esse curso traz ferramentas para que você possa cuidar da saúde e harmonia dentro das famílias da sua comunidade local.',
  },
  {
    img: 'aconselhamento.jpg',
    type: 'Pós Graduação',
    title: 'Aconselhamento Pastoral Familiar',
    content: 'Pastores e missionários possam entender o macrossistema das famílias.',
  }
]

const CardItem = ({props}) => {
  const { type, img, title, content } = props
  const link = title.toLowerCase().replaceAll(' ', '-')
  return (
    <Card bg={type} >
      <p className="type">{type}</p>
      <div className="img-wrapper">
        <Image 
          src={`/assets/cursos/${img}`} 
          width={210}
          height={126}
          alt="" />
      </div>
      <h3>{ title }</h3>
      <p>{ content }</p>
      <Link href={`/cursos/${link}`}>
        <a>
          <Button type="icon">
            Ver conteúdo do curso
            <Image
              src={Arrow.src}
              width={16}
              height={14}
              alt="" />
          </Button>
        </a>
      </Link>
    </Card>
  )
}

export default function FeatureCards() {
  return (
    <Wrapper>
      <Content>
        <div>
          <h2>Outros cursos</h2>
          <p>Para você conseguir ajudar as famílias da sua comunidade ou consultório, você precisa do conhecimento e das ferramentas certas.</p>
        </div>
        <div>
          <CardsWrapper>
            {
              cardsData.map((card, id) => {
                return (  
                  <CardItem 
                    key={id} 
                    props={card}
                  />
                )
              })
            }
          </CardsWrapper>
        </div>
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100vw;
  background: var(--azul);
  transform: translateX(calc((760px - 100vw)/2));
  display: flex;
  justify-content: center;
  font-family: var(--serif);
  @media screen and (max-width: 760px) {
   transform: translateX(0%);
  }
`

const Content = styled.div`
  max-width: 760px;
  min-width: 300px;
  display: flex;
  justify-content: space-between;
  gap: 5rem;
  color: var(--white);
  padding: 4rem 1rem;
  @media screen and (max-width: 760px) {
   flex-direction: column;
   gap: 1rem;
  }

  h2 {
    font-size: 2rem;
    font-family: var(--sans);
    color: var(--white);
    margin-bottom: 2rem;
  }

  a {
    text-decoration: none;
  }
`

const CardsWrapper = styled.div`
  display: flex;
  gap: 2rem;
  @media screen and (max-width: 760px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`

const Card = styled.div`
  width: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.25rem;
  border-radius: 10px;
  background-color: 
    ${props => props.bg === 'Pós Graduação'
      ? 'var(--laranjaLight)' : 'var(--amareloLight)'};
  color: var(--text);
  @media (max-width: 760px) {
    width: auto;
  }

  h3 {
    font-size: 1.25rem;
    color: var(--azul);
    font-family: var(--sans);
    @media (max-width: 760px) {
      font-size: 1rem;
    }
  }

  .type {
    font-family: var(--sans);
    color: var(--laranjaClaro);
    letter-spacing: 2px;
    text-transform: uppercase;
    font-size: 0.75rem;
    margin-bottom: 0.75rem;
  }

  .img-wrapper {
    max-width: 210px;
    /* height: 126px; */
    border-radius: 10px;
  }
  p {
    font-size: 0.9rem;
    @media (max-width: 760px) {
      display: none;
    }
  }
`
