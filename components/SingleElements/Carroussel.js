import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import styled from "styled-components"
import Button from "components/SingleElements/Button"
import Arrow from "public/assets/icons/left-arrow.svg"

export default function Carroussel({sliderData}) {
  const [slide, setSlide] = useState(1)
  function nextSlide() {
    return slide === (sliderData.length - 1) ? setSlide(0) : setSlide(slide + 1)
  }
  useEffect(() => { 
    setTimeout(nextSlide, 5000)
  })
  return (
    <div>
      <SlideWrapper>
        <ImageWrapper bgImg={`/assets/seminarios/${sliderData[slide].img}`} />
        <ContentWrapper>
          <div>
            <h3>{sliderData[slide].title}</h3>
            <p>{sliderData[slide].meta}</p>
          </div>
          <Link href={`/seminarios/${sliderData[slide].path}`} passHref>
            <a>
              <Button type="icon">
                  <div>Mais informações sobre o seminário</div>
                  <img
                    src={Arrow.src}
                    width={16}
                    height={14}
                    alt="" />
              </Button>
            </a>
          </Link>
        </ContentWrapper>
      </SlideWrapper>
    </div>
  )
}

const SlideWrapper = styled.div`
  min-width: 800px;
  height: 424px;
  display: flex;
  font-family: var(--serif);
  @media screen and (max-width: 760px) {
    min-width: fit-content;
    flex-direction: column;
  }
`

const ImageWrapper = styled.div`
  background-image: url(${props => props.bgImg});
  background-position: center;
  background-size: cover;
  width: 400px;
  overflow: hidden;
  @media screen and (max-width: 760px) {
   width: auto;
   height: 200px;
  }
`

const ContentWrapper = styled.div`
  background: var(--azulLight);
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.25rem;
  h3 {
    font-family: var(--sans);
    margin-bottom: 2rem;
  }
  a:hover {
    border-bottom: 0;
  }
  @media screen and (max-width: 760px) {
    max-width: max-content;
    height: 300px;
  }
`