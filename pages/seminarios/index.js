import { getSeminariosData } from 'libs/getSeminariosData';
import Card from 'components/SingleElements/Card';
import Excerpt from 'components/SingleElements/Excerpt';
import MainWrapper from 'components/Layouts/MainWrapper';

export default function SeminariosPage({data}) {
  return (
    <MainWrapper>
      <Excerpt>
        <h1>Leve o Eirene até sua igreja</h1>

        <p>Um dos nossos seminários, o PEM — Programa de Enriquecimento Matrimonial, vem sendo aperfeiçoado mundialmente faz mais de 30 anos. Ele nos acompanha desde a fundação do Eirene na Argentina e é aplicado em várias partes do mundo por psicólogos cristãos harmonizando casamentos mundo afora.</p>

        <blockquote>Os seminários são cursos livres montados pelos nossos professores que podem ser levados para qualquer lugar do Brasil.</blockquote>

        <p>Temos seminários interativos para vários públicos:</p>
        <ul>
          <li>Jovens e adolescentes;</li>
          <li>Pastores;</li>
          <li>Pais e mães;</li>
          <li>Profissionais da família;</li>
          <li>Casais.</li>
        </ul>
        <p>Nossos seminários servem para cumprir a missão do Eirene, que é levar famílias à harmonia.</p>

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
  const data = await getSeminariosData();
  return {
    props: {
      data
    }
  }
}