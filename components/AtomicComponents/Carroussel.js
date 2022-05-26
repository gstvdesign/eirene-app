import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"



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
      <div>
        <div>
          <Image src={`/assets/seminarios/${sliderData[slide].img}`} width={628} height={418} alt={sliderData[slide].title} />
        </div>
        <div>
          <h3>{sliderData[slide].title}</h3>
          <p>{sliderData[slide].meta}</p>
          <Link href={`/seminarios/${sliderData[slide].path}`}>
            <a>Mais informações sobre o seminário</a>
          </Link>
        </div>
      </div>
      <button onClick={nextSlide}>Next slide</button>
    </div>
  )
}