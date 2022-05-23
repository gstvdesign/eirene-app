import MainWrapper from '../../components/MainWrapper';
import { getArtigoData, getArtigosId } from '../../libs/getArtigosData';


export default function Artigo({data}) {
  const { autor, title, content } = data
  return (
    <MainWrapper>
      <h2>{ title }</h2>
      <h3>{ autor }</h3>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <hr />
    </MainWrapper>
  )
}
export async function getStaticPaths() {
  const paths = getArtigosId()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params}) {
  const data = await getArtigoData(params.id);
  return {
    props: {
      data
    }
  }
}