import styled, { keyframes } from "styled-components";

export default function Modal({modalVisible, videoId, closeModal}) {
  return modalVisible && (
      <Overlay>
        <ModalWrapper>
          <button onClick={closeModal}>Fechar</button>
          <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </ModalWrapper>
      </Overlay>
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
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  animation: ${fade} 0.5s;
`

const ModalWrapper = styled.div`
  min-width: 40vw;
  min-height: 50%;
  background: var(--white);
  padding: 2rem;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  z-index: 100;
  animation: ${fade} 0.7s;
`