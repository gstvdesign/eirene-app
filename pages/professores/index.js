import MainWrapper from "components/Layouts/MainWrapper";
import ContentWrapper from "components/SingleElements/ContentWrapper";
import { getProfessoresData } from "libs/getOutrosData";

export default function Professores({ data }) {
  return (
    <MainWrapper>
      <ContentWrapper dangerouslySetInnerHTML={{ __html: data.content }} />
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