import Inscreva from 'components/Layouts/Inscreva';
import { getCursoData, getCursosId } from 'libs/getCursosData';

export default function Curso({data}) {
  const { title, img,  content } = data
  return (
    <Inscreva
      type={'cursos'}
      title={title}
      img={img}
      content={content} />
  )
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