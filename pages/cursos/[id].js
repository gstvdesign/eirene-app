import { useState } from 'react';
import styled from 'styled-components';
import { getCursoData, getCursosId } from 'libs/getCursosData';
import FeaturedPage from 'components/Layouts/FeaturedPage';
import ContentWrapper from 'components/SingleElements/ContentWrapper';
import MainWrapper from 'components/Layouts/MainWrapper';
import Expandable from 'components/SingleElements/Expandable';
import Accordion from 'components/SingleElements/Accordion';
import Contact from 'components/SingleElements/Contact';
import FeatureHeader from 'components/PageElements/FeaturedHeader';
import Testemonials from 'components/index/Testemonials';
import Modal from 'components/SingleElements/Modal';

export default function Curso({data}) {
  const { title, img, subjects, 
    excerpt, subtitle, info, content } = data
  
  const [modalVisible, setmodalVisible] = useState(false)
  const [video, setVideo] = useState('')

  function showVideo(testemonial) {
    setmodalVisible(true)
    setVideo(testemonial.videoId)
  }
  if (title === 'Pós Graduação em Terapia Familiar Sistêmica de Casal') {
    return (
      <MainWrapper newLayout title={title} >
        <Wrapper>
          <FeatureHeader
            title={title}
            type='cursos'
            img={img}
            subtitle={subtitle}
            excerpt={excerpt} /> 
          <ContentWrapper>
            <FeaturedPage
              title={title}
              type='cursos'
              img={img}
              content={content} />
            <Contact />
            <Expandable subjects={subjects} />
            <Accordion info={info} />
          </ContentWrapper>
          <Testemonials
            type="professor"
            showVideo={showVideo} />
          {modalVisible && <Modal
            modalVisible={modalVisible}
            setmodalVisible={setmodalVisible}
            videoId={video} />}
        </Wrapper>
      </MainWrapper>
    )
  } else {
    return (
      <MainWrapper>
        <ContentWrapper>
          <FeaturedPage
            type='cursos'
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
    /* color: var(--laranjaClaro); */
    font-size: 1.5rem;
    font-family: var(--sans);
  }
  p {
    font-family: var(--serif);
  }
`