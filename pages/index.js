import MainWrapper from 'components/Layouts/MainWrapper';
import Carroussel from 'components/AtomicComponents/Carroussel';

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
  return (
    <MainWrapper newHeader>
      <main>
        Some content here
        <Carroussel sliderData={data} />
      </main>
    </MainWrapper>
  )
}