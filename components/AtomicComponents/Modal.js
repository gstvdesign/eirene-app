import styled from "styled-components";

const Overlay = styled.div`
  min-width: 100%;
  min-height: 100%;
  background-color: rgba(41, 41, 41, 0.3);
  backdrop-filter: blur(10px);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
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
`

export default function Modal({closeModal, videoId}) {
  return (
      <Overlay>
      <ModalWrapper>
        <button onClick={closeModal}>Fechar</button>
        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </ModalWrapper>
    </Overlay>
    )
}