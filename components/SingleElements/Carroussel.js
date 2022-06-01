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
        <ImageWrapper>
          <Image 
            src={`/assets/seminarios/${sliderData[slide].img}`}
            width={628}
            height={424}
            layout="fixed"
            alt={sliderData[slide].title} />
        </ImageWrapper>
        <ContentWrapper>
          <div>
            <h3>{sliderData[slide].title}</h3>
            <p>{sliderData[slide].meta}</p>
          </div>
          <Link href={`/seminarios/${sliderData[slide].path}`} passHref>
            <a>
              <Button type="icon">
                  <div>Mais informações sobre o seminário</div>
                  <Image
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
`

const ImageWrapper = styled.div`
  max-width: 400px;
  overflow: hidden;
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
`