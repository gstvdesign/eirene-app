import styled from 'styled-components';
import MainWrapper from '../../components/MainWrapper';
import { getCursosData } from '../../libs/getCursosData';
import Card from '../../components/Card';

const Excerpt = styled.div`
  max-width: 928px;
  margin: 0 auto;
  position: relative;
`

export default function CursosPage({data}) {
  return (
    <MainWrapper>
      <Excerpt>
        <h1>Estude com a gente</h1>
        <p>Nossos cursos dão treinamento acadêmico para voluntários e profissionais da família.</p>
        <blockquote>Para você conseguir ajudar as famílias da sua comunidade ou consultório, você precisa do conhecimento e das ferramentas certas.</blockquote>
        <p>Nós temos cursos voltados para pessoas em vários níveis acadêmicos:</p>
        <ul>
          <li>Profissionais da famílias;</li>
          <li>Pastores;</li>
          <li>Psicólogos;</li>
          <li>Voluntários de comunidades e instituições cristãs.</li>
        </ul>
        <p>Todos esses cursos são certificados, da especialização à pós-graduação, e podem ter um peso muito positivo no seu currículo.</p>
      </Excerpt>
      {
        data.map((item) => {
          return (
            <Card key={item.meta.title} props={item.meta} />
          )
        })
      }
    </MainWrapper>
  )
}

export async function getStaticProps() {
  const data = await getCursosData();
  return {
    props: {
      data
    }
  }
}