import MainWrapper from "../../components/MainWrapper";
import { getProfessoresData } from "../../libs/getOutrosData";

export default function Professores({ data }) {
  return (
    <MainWrapper>
      <div dangerouslySetInnerHTML={{ __html: data.content }} />
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