import { getSeminarioData, getSeminariosId } from 'libs/getSeminariosData';
import Inscreva from 'components/Layouts/Inscreva'

export default function Seminario({data}) {
  const { title, img, content } = data
  return (
    <Inscreva
      type={'seminarios'}
      title={title}
      img={img}
      content={content} />
  )
}
export async function getStaticPaths() {
  const paths = getSeminariosId()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params}) {
  const data = await getSeminarioData(params.id);
  return {
    props: {
      data
    }
  }
}