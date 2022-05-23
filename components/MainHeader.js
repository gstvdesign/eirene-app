import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import GlobalHead from "./GlobalHead";
import headerImg from '/public/assets/header.jpg'

const HeaderWrapper = styled.div`
  background: var(--azulMedio);
  background-image: url(${headerImg}); 
  background-blend-mode: multiply;
  -webkit-background-size: cover;
  background-size: cover;
  color: var(--white);
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: baseline;
  justify-content: center;
  justify-items: center;
  height: 140px;
`

const Brand = styled.div`
  grid-column: 3/4;
  padding: 1em 0 0 1em; 
`

const HeaderTitle = styled.span`
  grid-column: 4/12;
  font-weight: normal;
  font-style: italic;
`
export default function Header() {
  return (
  <div>  
      <HeaderWrapper>
        <GlobalHead />
    
        <Brand>
          <Link href="/">
            <Image
              src="/assets/logo-white-small.png"
              alt="Logo do Eirene"
              width={120}
              height={40} />
          </Link>
        </Brand>
        <HeaderTitle>Levando famílias à harmonia</HeaderTitle>
    
      </HeaderWrapper>
  </div>
  )

}