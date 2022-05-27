import { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import MainWrapper from 'components/Layouts/MainWrapper';
import Carroussel from 'components/AtomicComponents/Carroussel';
import Modal from 'components/AtomicComponents/Modal';
import Testemonials from 'components/AtomicComponents/Testemonials';
import testemunhosData from '_data/_index/testemunhos'
import Button from 'components/AtomicComponents/Button';

const data = [
  {
    title: "Antes de casar, vamos conversar? Um trabalho preventivo",
    meta: "É inevitável que um casamento vá passar por algum problema. Esse seminário pretende fortalecer o casal pra que quando os problemas aparecerem o casal tenha ferramentas para lidar com eles.",
    img: "antes_casar.jpg",
    path: "antes-casar"
  },
  {
    title: "Projetos Filhos Felizes",
    img: "filhos_felizes.jpg",
    meta: "Cuidar dos filhos não é tarefa fácil. É comum não sabermos qual o caminho a seguir. Esse seminário é baseado no engajamento dos pais para potencializar um crescimento saudável dos seus filhos.",
    path: "filhos-felizes"
  },
  {
    title: "Educação para a Vida",
    img: "educacao.jpg",
    meta: "Um seminário para jovens visando seu crescimento pessoal.",
    path: "educacao"
  }
]  

const { testemunhosData: testemunhos } = testemunhosData

export default function Home() {
  const [modalVisible, setmodalVisible] = useState(false)
  const [video, setVideo] = useState('')

  function showVideo(testemonial) {
    setmodalVisible(true)
    setVideo(testemonial.videoId)
  }
  function closeModal() {
    setmodalVisible(false)
  }
  return (
    <MainWrapper newHeader>
      <IndexWrapper>
        <Modal
          closeModal={closeModal}
          modalVisible={modalVisible}
          videoId={video} />
        <Testemonials 
          testemonials={testemunhos} 
          showVideo={showVideo} />
        <div className="title-action">
          <h2>Seminários</h2>
          <Button type="text">Ver todos os seminários</Button>
        </div>
        <p className='big'>Cursos livres montados pelos nossos professores que podem ser levados para qualquer lugar do Brasil. Temos cursos para <Link href="/seminarios/filhos-felizes"> pais e mães</Link>, <Link href="/seminarios/antes-casar"> noivos</Link>, <Link href="/seminarios/pem"> casais</Link>, <Link href="/seminarios/dialogos-saude-pastoral"> pastores</Link> e <Link href="/seminarios"> muito mais</Link>.</p>
        <Carroussel sliderData={data} />
      </IndexWrapper>
    </MainWrapper>
  )
}

const IndexWrapper = styled.div`
  font-family: var(--serif);

  .title-action {
    display: flex;
    gap: 1.25rem;
    margin-bottom: 1rem;
  }
  
  h2 {
    font-family: var(--sans);
    font-size: 2rem;
    color: var(--laranjaClaro);
    margin: 0;
  }
  .big {
    font-size: 1.25rem;
    margin-bottom: 2.5rem;
  }
  .bigger {
    font-size: 1.5rem;
  }
`