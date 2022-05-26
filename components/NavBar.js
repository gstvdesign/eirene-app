import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import styled from "styled-components"
import routes from "../libs/nav"
import MenuIcon from "/public/assets/menuicon.svg"

const NavBar = styled.nav`
  padding-bottom: 0;
  background: var(--azulClaro);
  width: 100%;
  display: flex;
  justify-content: center; 
  @media screen and (max-width: 780px) {
    padding: 1rem;
  }
`
const NavLinks = styled.a`
  color: var(--text); 
  text-decoration: none;
  padding: 1rem;
  border-left: 1px solid var(--text);
  cursor: pointer;
  @media screen and (max-width: 780px) {
    border: 0;
  }

  :last-child {
    border-right: 1px solid var(--text);
  }

  :hover {
    color: var(--azulClaro);
    border-bottom: 1px solid var(--laranja);
    background: var(--text);
  }
`

const IconWrapper = styled.div`
  border: solid 1px var(--text);
  border-radius: 3px;
  padding: 0.5rem;
  margin-left: 1rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  cursor: pointer;
`
const MobileNav = styled.div`
  background-color: var(--azulClaro);
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.5s;
  max-height: ${props => props.show ? '400px' : '0'};
  overflow: ${props => props.show ? 'visible' : 'hidden'};
  a {
    width: 270px;
    border: 1px solid var(--text);
    margin-bottom: 0.2rem;
  }
`

export default function Nav() {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
      const mobileScreen = window.matchMedia('(max-width: 780px)')
      setIsMobile(mobileScreen.matches)

      const checkMobile = (e) => setIsMobile(e.matches)
      
      mobileScreen.addEventListener('change', e => checkMobile(e))

      return mobileScreen.removeEventListener('change', e => checkMobile(e))
    },[])

    const [showMobileNav, setShowMobileNav] = useState(false);

    function showNav() {
      setShowMobileNav(!showMobileNav)
    }
    if (isMobile) {
      const mobileMain = routes.filter(route => route.showOnMobile)
      const otherMobile = routes.filter(route => !route.showOnMobile)
      return (
        <div>
          <NavBar>
            {
              mobileMain.map((route, index) => {
                return (
                  <Link key="index" href={route.path}>
                    <NavLinks>{route.text}</NavLinks>
                  </Link>
                )
              })
            }
            <IconWrapper onClick={showNav}>
              <Image src={MenuIcon.src} width={20} height={16} alt="" />
              Menu
            </IconWrapper>
          </NavBar>
          <MobileNav show={showMobileNav}>
            {
              otherMobile.map((route, index) => {
                return (
                  <Link key={index} href={route.path}>
                    <NavLinks>{route.text}</NavLinks>
                  </Link>
                )
              })
            }
          </MobileNav>
        </div>
      )  
    } else {
      return (
        <NavBar>
          {
            routes.map((route, index) => {
              return (
                <Link key={index} href={route.path}>
                  <NavLinks>{route.text}</NavLinks>
                </Link>
              )
            })
          }
        </NavBar>
    )
  }
}
