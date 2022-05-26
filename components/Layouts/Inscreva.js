import Image from "next/image";
import MainWrapper from "components/Layouts/MainWrapper";

export default function Inscreva(props) {
  return (
    <div>
      <MainWrapper>
        <h2>{ props.title }</h2>
        <Image src={ `/assets/${props.type}/${props.img}` } width="600px" height="400px" alt={ props.title } />
        <div dangerouslySetInnerHTML={{ __html: props.content }} />
      </MainWrapper>
    </div>
  )
}