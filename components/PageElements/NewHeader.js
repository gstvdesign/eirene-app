import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import nav from "_data/_pages/nav";
import MenuIconWhite from "public/assets/menuiconwhite.svg"

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
  align-items: center;
  a {
    letter-spacing: 1px;
    color: var(--white);
    text-decoration: none;
  }
`

const Menu = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0.25rem 1rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  border: 1px solid var(--white);
  border-radius: 20px;
  cursor: pointer;
`

const SubNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: ${props => props.show ? 'visible' : 'hidden'};
  max-height: ${props => props.show ? '400px' : '0'};
  margin-top: 1rem;
  transition: all 0.5s;
  a {
    color: var(--white);
  }
`
const { nav: routes } = nav

export default function NewNavBar() {
  const [showMenu, setShowMenu] = useState(false)
  const mainNav = routes.filter(path => path.topLevel)
  const otherNav = routes.filter(path => !path.topLevel)
  function menuIsShown() {
    setShowMenu(!showMenu)
  }
  return (
    <div>
      <Nav>
        {mainNav.map((el, id) => {
          return (
            <Link key={id} href={el.path}>
              <a>{el.newText}</a>
            </Link>
            )
        })}
        <Menu onClick={menuIsShown}>
          <Image src={MenuIconWhite.src}  width={16} height={12} alt="" />
          Menu
        </Menu>
      </Nav>
      <SubNav show={showMenu}>
          {otherNav.map((el, id) => {
            return (
              <Link key={id} href={el.path}>
                <a>{el.text}</a>
              </Link>
            )
          })}
        </SubNav>
    </div>
  )
}