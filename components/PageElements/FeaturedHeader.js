import Image from "next/image";
import styled from "styled-components";

export default function FeatureHeader({title, type, img, subtitle, excerpt}) {
  return (
    <Wrapper>
      <div className="content">
        <h3>{title}</h3>
        <ImageWrapper
          className="img-wrapper"
          bgImg={`/assets/${type}/${img}`} />
        <h2>{subtitle}</h2>
        <p>{excerpt}</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: var(--amareloLight);
  width: 100vw;
  transform: translateX(calc((760px - 100vw)/2));
  display: flex;
  justify-content: center;
  padding: 4rem 2rem;
  @media screen and (max-width: 760px) {
   transform: translateX(0%);
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 20rem;
    text-align: center;
  }

  h3 {
    font-size: 1rem;
    font-weight: 400;
    color: var(--laranjaClaro);
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 2rem;
    color: var(--azul);
    font-family: var(--sans);
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    font-family: var(--serif);
  }
`

const ImageWrapper = styled.div`
  background: url(${props => props.bgImg});
  background-size: cover;
  width: 200px;
  height: 200px;
  border-radius: 100px;
  margin-bottom: 1rem;
`