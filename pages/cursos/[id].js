import styled from 'styled-components';
import { getCursoData, getCursosId } from 'libs/getCursosData';
import Inscreva from 'components/Layouts/Inscreva';
import ContentWrapper from 'components/SingleElements/ContentWrapper';
import MainWrapper from 'components/Layouts/MainWrapper';
import Expandable from 'components/SingleElements/Expandable';
import Accordion from 'components/SingleElements/Accordion';
import Contact from 'components/SingleElements/Contact';

export default function Curso({data}) {
  const { title, img, subjects, info, content } = data
  console.log(data)
  if (title === 'Terapia Familiar e de Casal') {
    return (
      <MainWrapper newLayout >
        <Wrapper>
          <ContentWrapper>
            <Inscreva
              type={'seminarios'}
              title={title}
              img={img}
              content={content} />
            <Contact />
            <Expandable subjects={subjects} />
            <Accordion info={info} />
          </ContentWrapper>
        </Wrapper>
      </MainWrapper>
    )
  } else {
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
}
export async function getStaticPaths() {
  const paths = getCursosId()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params}) {
  const data = await getCursoData(params.id);
  return {
    props: {
      data
    }
  }
}

const Wrapper = styled.div`
  h2 {
    color: var(--laranjaClaro);
    font-size: 1.5rem;
    font-family: var(--sans);
  }
`