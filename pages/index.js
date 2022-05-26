import { useState, useEffect } from 'react';
import Image from 'next/image';
import MainWrapper from 'components/Layouts/MainWrapper';

const data = [
  {
    title: "Antes de casar, vamos conversar? Um trabalho preventivo",
    meta: "É inevitável que um casamento vá passar por algum problema. Esse seminário pretende fortalecer o casal pra que quando os problemas aparecerem o casal tenha ferramentas para lidar com eles.",
    img: "antes_casar.jpg",
    permalink: "/antes-casar/"
  },
  {
    title: "Projetos Filhos Felizes",
    img: "filhos_felizes.jpg",
    meta: "Cuidar dos filhos não é tarefa fácil. É comum não sabermos qual o caminho a seguir. Esse seminário é baseado no engajamento dos pais para potencializar um crescimento saudável dos seus filhos.",
    permalink: "/filhos_felizes/"
  },
  {
    title: "Educação para a Vida",
    img: "educacao.jpg",
    meta: "Um seminário para jovens visando seu crescimento pessoal.",
    permalink: "/educacao/"
  }
]  

export default function Home() {
  const [slide, setSlide] = useState(1)
  function nextSlide() {
    return slide === (data.length - 1) ? setSlide(0) : setSlide(slide + 1)
  }
  useEffect(() => { 
    setTimeout(nextSlide, 5000)
  })
  return (
    <MainWrapper newHeader>
      <main>
        Some content here
        <div>
          <div>
            <Image src={`/assets/seminarios/${data[slide].img}`} width={628} height={418} alt={data[slide].title} />
          </div>
          <div>
            <h3>{data[slide].title}</h3>
            <p>{data[slide].meta}</p>
          </div>
        </div>
        <button onClick={nextSlide}>Next slide</button>
      </main>
    </MainWrapper>
  )
}