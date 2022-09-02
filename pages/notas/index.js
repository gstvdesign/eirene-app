import styled from 'styled-components';
import { getNotasData } from 'libs/getNotasData';
import ContentWrapper from 'components/SingleElements/ContentWrapper';
import MainWrapper from 'components/Layouts/MainWrapper';

export default function CursosPage({data}) {
  return (
    <MainWrapper newLayout>
      <ContentWrapper>
        <Header>Notas</Header>
        {
          data.map((item, index) => {
            return (
              <div key={index}>
                <Title>{item.meta.title}</Title>
                <Date>{item.meta.date}</Date>
                <Content dangerouslySetInnerHTML={{ __html: item.content }}/>
                <Author>Por {item.meta.author}</Author>
              </div>
            )
          })
        }
      </ContentWrapper>
    </MainWrapper>
  )
}

const Header = styled.h1`
  padding-bottom: 2rem;
  border-bottom: solid 1px var(--azul);
  font-family: var(--sans);
`

const Title = styled.h2`
  margin-top: 3rem;
`

const Date = styled.p`
  font-size: 14px;
  color: var(--laranja);
  margin-bottom: 3rem;
`

const Author = styled.p`
  font-size: 14px;
  font-style: italic;
  color: var(--azul);
  margin-bottom: 2rem;
`

const Content = styled.div``

export async function getStaticProps() {
  const data = await getNotasData();
  return {
    props: {
      data
    }
  }
}