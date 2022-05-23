import styled from 'styled-components';
import MainWrapper from '../../components/MainWrapper';
import { getCursosData } from '../../libs/getCursosData';
import Card from '../../components/Card';

const Excerpt = styled.div`
  max-width: 928px;
  margin: 0 auto;
  position: relative;
`

export default function CursosPage({data}) {
  return (
    <MainWrapper>
      <Excerpt>
        whatever

      </Excerpt>
      {
        data.map((item) => {
          return (
            <Card key={item.meta.title} props={item.meta} />
          )
        })
      }
    </MainWrapper>
  )
}

export async function getStaticProps() {
  const data = await getCursosData();
  return {
    props: {
      data
    }
  }
}