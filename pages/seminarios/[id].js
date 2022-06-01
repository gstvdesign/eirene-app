import { getSeminarioData, getSeminariosId } from 'libs/getSeminariosData';
import Inscreva from 'components/Layouts/Inscreva'
import ContentWrapper from 'components/SingleElements/ContentWrapper';
import MainWrapper from 'components/Layouts/MainWrapper';

export default function Seminario({data}) {
  const { title, img, content } = data
  return (
    <MainWrapper>
      <ContentWrapper>
        <Inscreva
          type={'seminarios'}
          title={title}
          img={img}
          content={content} />
      </ContentWrapper>
    </MainWrapper>
  )
}

export async function getStaticPaths() {
  const paths = getSeminariosId()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params}) {
  const data = await getSeminarioData(params.id);
  return {
    props: {
      data
    }
  }
}