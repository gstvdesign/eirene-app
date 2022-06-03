import Image from "next/image";
import styled from "styled-components";
import testemunhosData from '_data/_index/testemunhos'

const { testemunhosData: testemonials } = testemunhosData

export default function Testemonials({ showVideo, type }) {
  console.log(type)
  const filteredArray = testemonials.filter(el => el.type === type  && !el.main)
  console.log(filteredArray)
  return (
    <TesteMonialsWrapper>
      <h2>
        {`${type === 'aluno'
          ? 'O que nossos alunos estão falando…'
          : 'Algumas palavras de nossos professores:'}`
        }
      </h2>
      <TesteMonialsItem>
        {filteredArray.map((testemonial, id) => {
          const {videoId, title, desc, type} = testemonial
          if (id < 4) return (
            <ItemWrapper
              key={id}
              onClick={() => showVideo(testemonial)}>
              <Img bgImg={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}>
                <span className="circle">
                  <span className="triangle"></span>
                </span>
              </Img>
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
  font-family: var(--serif);
  h2 {
    margin-bottom: 2rem;
  }
`

const TesteMonialsItem = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`

const ItemWrapper = styled.div`
  width: 200px;
  h3 {
    font-family: var(--sans);
    margin-bottom: 0.5rem;
  }
`

const Img = styled.div`
  background-image: url(${props => props.bgImg});
  background-position: center;
  background-size: cover;
  width: 150px;
  height: 150px;
  margin-bottom: 1rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  .circle {
    background-color: var(--white);
    width: 65px;
    height: 65px;
    border-radius: 65px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .triangle {
    display: inline-block;
    width: 0;
    height: 0;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-left: 35px solid var(--azul);
    transform: translate(10%, -5%);
  }
`