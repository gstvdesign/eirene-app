import styled from "styled-components";
import Image from "next/image";
import Button from "components/SingleElements/Button";
import CloseIcon from "public/assets/icons/close.svg"

export default function Modal({ videoId, setmodalVisible, modalVisible}) {
  return (
    <>
        <ModalWrapper modalVisible={modalVisible}>
          <div>
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
            <iframe
              width="auto"
              height="400"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
          </div>
        </ModalWrapper>
        <Overlay 
           modalVisible={modalVisible}
          onClick={() => setmodalVisible(false)} />
    </>
  )
}

const Overlay = styled.div`
  min-width:  ${props => !props.modalVisible ? '0' : '100vw'};
  min-height:  ${props => !props.modalVisible ? '0' : '100vh'};
  background-color: rgba(41, 41, 41, 0.9);
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${props => props.modalVisible ? 'scale(1)' : 'scale(0)'};
  transition: all 0.5s;
`

const ModalWrapper = styled.div`
  min-width: ${props => props.modalVisible ? '100vw' : '0'};
  display: flex;
  justify-content: center;
  position: fixed;
  left: 0;
  z-index: 100;
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
    transform: ${props => !props.modalVisible ? 'scale(0)' : 'scale(1)'};
    transition: all 0.5s;
  }
`