import styled, { keyframes } from "styled-components";
import Image from "next/image";
import Button from "components/SingleElements/Button";
import CloseIcon from "public/assets/icons/close.svg"

export default function Modal({ videoId, setmodalVisible}) {
  return (
    <>
        <ModalWrapper>
          <Button 
            type="icon" 
            onClick={() => setmodalVisible(false)}>
            Fechar 
            <Image 
              src={CloseIcon.src}
              width="11"
              height="11"
              alt="" />
          </Button>
          <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </ModalWrapper>
        <Overlay></Overlay>
    </>
  )
}

const fade = keyframes`
from {
  opacity: 0;
} to {
  opacity: 1;
}
`

const Overlay = styled.div`
  min-width: 100%;
  min-height: 100%;
  background-color: rgba(41, 41, 41, 0.9);
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fade} 0.5s;
`

const ModalWrapper = styled.div`
  background: var(--white);
  padding: 2rem;
  border-radius: 10px;
  display: flex;
  gap: 1rem;
  align-items: flex-end;
  flex-direction: column;
  position: absolute;
  top: 15%;
  left: 25%;
  z-index: 100;
  animation: ${fade} 0.7s;
`