import styled from "styled-components";
import MainWrapper from "../../components/MainWrapper";
import { getProfessoresData } from "../../libs/getOutrosData";

const Prof = styled.div`
  a {
    font-family: Unna, serif;
    font-style: italic;
    font-size: 1.2rem;
  }
`

export default function Professores({ data }) {
  return (
    <MainWrapper>
      <Prof dangerouslySetInnerHTML={{ __html: data.content }} />
    </MainWrapper>
  )
}

export async function getStaticProps() {
  const data = await getProfessoresData()
  return {
    props: {
      data
    }
  }
}