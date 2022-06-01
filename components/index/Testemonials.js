import Image from "next/image";
import styled from "styled-components";
import testemunhosData from '_data/_index/testemunhos'

const { testemunhosData: testemonials } = testemunhosData

export default function Testemonials({ showVideo}) {
  return (
    <TesteMonialsWrapper>
      <h2>O que nossos alunos estão falando…</h2>
      <TesteMonialsItem>
        {testemonials.map((testemonial, id) => {
          const {img, title, desc} = testemonial
          return (
            <ItemWrapper
              key={id}
              onClick={() => showVideo(testemonial)}>
              <div>
                <Image src={`/assets/${img}`} width={150} height={150} alt={title} />
              </div>
              <div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            </ItemWrapper>
          )
          })
        }
      </TesteMonialsItem>
    </TesteMonialsWrapper>
  )
}

const TesteMonialsWrapper = styled.div`
  padding: 4rem 0;
  h2 {
    margin-bottom: 2rem;
  }
`

const TesteMonialsItem = styled.div`
  display: flex;
  margin: 0 auto;
  gap: 1rem;
`

const ItemWrapper = styled.div`
  h3 {
    font-family: var(--sans);
    margin-bottom: 0.5rem;
  }
`