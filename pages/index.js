import { useState } from 'react';
import MainWrapper from 'components/Layouts/MainWrapper';
import Carroussel from 'components/AtomicComponents/Carroussel';
import Modal from 'components/AtomicComponents/Modal';

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

export default function Home() {
  const [showModal, setShowModal] = useState(false)

  function showHideModal() {
    setShowModal(!showModal)
  }
  return (
    <MainWrapper newHeader>
      <main>
        {showModal && <Modal closeModal={showHideModal} videoId="hsp2gFyXK9M" />}
        <div><button onClick={showHideModal}>show or hide modal</button></div>
        {/* <Carroussel sliderData={data} /> */}
      </main>
    </MainWrapper>
  )
}