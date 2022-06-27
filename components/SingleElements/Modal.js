import styled from "styled-components";
import Image from "next/image";
import Button from "components/SingleElements/Button";
import CloseIcon from "public/assets/icons/close.svg"
import { keyframes } from "styled-components";
import { css } from "styled-components";

export default function Modal({ videoId, setmodalVisible, modalVisible}) {
  return (
    <>
        <ModalWrapper>
          <div className={modalVisible ? 'fade-in' : 'fade-out'}>
            <Button
              type="icon"
              onClick={() => setmodalVisible(false)}>
              Fechar
              <img
                src={CloseIcon.src}
                width="11"
                height="11"
                alt="" />
            </Button>
            <iframe
              width="auto"
              height="400"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
          </div>
        </ModalWrapper>
        <Overlay className="animate-in" 
          modalVisible={modalVisible}
          onClick={() => setmodalVisible(false)} />
    </>
  )
}

const animation = keyframes`
  0% {
    transform: scale(0) translate(50);
    opacity: 0;
  }
  100% {
    transform: scale(1) translate(50);
    opacity: 1;
  }
`

const Overlay = styled.div`
  min-width:  100vw;
  min-height:  100vh;
  background-color: rgba(41, 41, 41, 0.9);
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${animation} 1s;
`

const ModalWrapper = styled.div`
  min-width: 100vw;
  display: flex;
  justify-content: center;
  position: fixed;
  left: 0;
  z-index: 100;
  animation: ${animation} 2s;
  div {
    background: var(--white);
    padding: 2rem;
    border-radius: 10px;
    display: flex;
    gap: 1rem;
    align-items: flex-end;
    flex-direction: column;
    position: fixed;
    top: 3rem;
  }
`