import styled from "styled-components";
import { getMonoData } from "libs/getOutrosData";
import ContentWrapper from "components/SingleElements/ContentWrapper";
import MainWrapper from "components/Layouts/MainWrapper";

const Mono = styled.div`
  em {
    color: var(--azul);
  }
`

export default function Professores({ data }) {
  return (
    <MainWrapper>
      <ContentWrapper>
        <h2>Abaixo seguem as monografias publicadas por nossos alunos.</h2>
        <p>Caso você tenha interesse em alguma monografia, basta mandar um email para <a href="mailto:eirene@eirene.com.br">eirene@eirene.com.br</a> que a gente envia a monografia pra você.</p>
        <p>Caso deseje receber os textos impressos, nos envie um email solicitando que informaremos os valores de cópia e de remessa. Depois é só depositar o valor na conta do Eirene e nos comunicar por e-mail a data e o valor do depósito que imediatamente enviamos texto para seu endereço.</p>
        {data.map(mono => {
          const { content, meta } = mono
          return (
            <Mono key={meta.title}>
              <h3>{ meta.title }</h3>
              <div dangerouslySetInnerHTML={{ __html: content }} />
              <hr />
            </Mono>
          )
        })}
      </ContentWrapper>
    </MainWrapper>
  )
}

export async function getStaticProps() {
  const data = await getMonoData()
  return {
    props: {
      data
    }
  }
}