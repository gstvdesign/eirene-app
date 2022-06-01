import { getArtigosData } from 'libs/getArtigosData';
import Artigos from 'components/SingleElements/Artigos';
import ContentWrapper from 'components/SingleElements/ContentWrapper';
import MainWrapper from 'components/Layouts/MainWrapper';

export default function CursosPage({data}) {
  return (
    <MainWrapper>
      <ContentWrapper>
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
      </ContentWrapper>
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