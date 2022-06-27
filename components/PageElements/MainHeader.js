import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import GlobalHead from "/components/PageElements/GlobalHead";
import NewNavBar from "/components/PageElements/NewHeader";
import headerImg from 'public/assets/header.jpg'

const bgImg = `url(${headerImg.src})`

const HeaderWrapper = styled.div`
  background: var(--azul);
  background-image:${props => props.useBg ? '': bgImg}; 
  background-blend-mode: multiply;
  -webkit-background-size: cover;
  background-size: cover;
  color: var(--white);
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: space-around;
  padding: 2rem;
  @media screen and (max-width: 600px) {
   flex-direction: column;
   align-items: center;
   gap: 1rem;
   text-align: center;
  }
`

const Brand = styled.div`
  min-width: 120px;
  cursor: pointer;
`

const HeaderTitle = styled.span`
  font-family: var(--serif);
  font-weight: normal;
  font-style: italic;
`
export default function Header(props) {
  if (props.newHeader) {
    return (
      <HeaderWrapper useBg>
        <GlobalHead title={props.title} />
        <Brand>
          <Link href="/">
            <img
              src="/assets/logo-white-small.png"
              alt="Logo do Eirene"
              width={120}
              height={40} />
          </Link>
        </Brand>
        <NewNavBar />
      </HeaderWrapper>
    )
  } else {
    return (
      <div>  
          <HeaderWrapper>
            <GlobalHead title={props.title} />
        
            <Brand>
              <Link href="/">
                <img
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

}