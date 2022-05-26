import MainWrapper from "components/Layouts/MainWrapper";
import { getAboutData } from "libs/getOutrosData";

export default function About({ data }) {
  return (
    <MainWrapper>
      <div dangerouslySetInnerHTML={{ __html: data.content }} />
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