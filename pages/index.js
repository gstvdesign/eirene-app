import { useState } from 'react';
import styled from 'styled-components';
import AboveFold from 'components/index/AboveFold';
import FeatureCards from 'components/index/FeatureCards';
import FeatureCarroussel from 'components/index/FeatureCarroussel';
import MainWrapper from 'components/Layouts/MainWrapper';
import Modal from 'components/SingleElements/Modal';
import Testemonials from 'components/index/Testemonials';

export default function Home() {
  const [modalVisible, setmodalVisible] = useState(false)
  const [video, setVideo] = useState('')

  function showVideo(testemonial) {
    setmodalVisible(true)
    setVideo(testemonial.videoId)
  }
  return (
    <MainWrapper newLayout >
      <AboveFold showVideo={showVideo}/>
      <Modal
        modalVisible={modalVisible}
        setmodalVisible={setmodalVisible}
        videoId={video} />
      <Divider />
      <Testemonials
        type='aluno'
        showVideo={showVideo} />
      <FeatureCards />
      <FeatureCarroussel />
    </MainWrapper>
  )
}

const Divider = styled.div`
  width: 172px;
  height: 1px;
  background-color: var(--azul);
  margin: 2rem auto;
`