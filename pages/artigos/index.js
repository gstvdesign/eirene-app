import MainWrapper from 'components/Layouts/MainWrapper';
import { getArtigosData } from 'libs/getArtigosData';
import Artigos from 'components/SingleElements/Artigos';

export default function CursosPage({data}) {
  return (
    <MainWrapper>
      <h2>Segue abaixo a lista dos artigos publicados pelos nossos professores</h2>
      {
        data.map((item) => {
          return (
            <Artigos 
              key={item.meta.title} 
              props={item} />
          )
        })
      }
    </MainWrapper>
  )
}

export async function getStaticProps() {
  const data = await getArtigosData();
  return {
    props: {
      data
    }
  }
}