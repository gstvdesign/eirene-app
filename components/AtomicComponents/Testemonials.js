import Image from "next/image";
import styled from "styled-components";

export default function Testemonials({testemonials, showVideo}) {
  return (
    <TesteMonialsWrapper>
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
    </TesteMonialsWrapper>
  )
}

const TesteMonialsWrapper = styled.div`
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