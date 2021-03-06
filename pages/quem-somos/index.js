import MainWrapper from "components/Layouts/MainWrapper";
import ContentWrapper from "components/SingleElements/ContentWrapper";
import { getAboutData } from "libs/getOutrosData";

export default function About({ data }) {
  return (
    <MainWrapper>
      <ContentWrapper dangerouslySetInnerHTML={{ __html: data.content }} />
    </MainWrapper>
  )
}

export async function getStaticProps() {
  const data = await getAboutData()
  return {
    props: {
      data
    }
  }
}

