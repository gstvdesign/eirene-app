import Link from 'next/link';
import styled from 'styled-components';
import Button from 'components/SingleElements/Button';
import Carroussel from 'components/SingleElements/Carroussel';

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
    meta: "Um seminário para jovens visando seu crescimento pessoal abrangendo quatro áreas do crescimento pessoal: física, social, emocional e espiritual.",
    path: "educacao"
  }
] 


export default function FeatureSecondary() {
  return (
    <Wrapper>
      <Action>
        <div className="action-title">
          <h2>Seminários</h2>
          <Link  href="/seminarios/">
            <a>
              <Button type="text">Ver todos os seminários</Button>
            </a>
          </Link>
        </div>
        <p className='big'>Cursos livres montados pelos nossos professores que podem ser levados para qualquer lugar do Brasil. Temos cursos para <Link href="/seminarios/filhos-felizes" passHref><a>pais e mães</a></Link>, <Link href="/seminarios/antes-casar" passHref><a>noivos</a></Link>, <Link href="/seminarios/pem" passHref><a>casais</a></Link>, <Link href="/seminarios/dialogos-saude-pastoral" passHref><a>pastores</a></Link> e <Link href="/seminarios" passHref><a>muito mais</a></Link>.</p>
      </Action>
      <Carroussel sliderData={data} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100vw;
  background: var(--amareloLight);
  transform: translateX(calc((760px - 100vw)/2));
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;
  @media screen and (max-width: 760px) {
   transform: translateX(0%);
   padding: 4rem 1rem;
  }
`

const Action = styled.div`
  max-width: 640px;
  margin-bottom: 2rem;

  h2 {
    font-family: var(--sans);
    font-size: 2rem;
    color: var(--laranjaClaro)
  }

  a  {
    color: var(--laranjaClaro)
  }

  .action-title {
    display: flex;
    gap: 1.25rem;
    margin-bottom: 1rem;
  }

  p { 
    font-family: var(--serif);
    font-size: 1.25rem;
  }
`