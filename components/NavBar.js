import Link from "next/link"
import styled from "styled-components"

const NavBar = styled.nav`
  grid-column: 1/ -1;
  padding-bottom: 0;
  background: var(--azulClaro);
  width: 100%;
  display: flex;
  justify-content: center; 
`
const NavLinks = styled.a`
  color: var(--text); 
  text-decoration: none;
  padding: 1rem;
  border-left: 1px solid var(--text);
  cursor: pointer;

  &:last-child {
    border-right: 1px solid var(--text);
  }

  &:hover {
    color: var(--azulClaro);
    border-bottom: 1px solid var(--laranja);
    background: var(--text);
  }
`
export default function Nav() {
  return (
  <div>
    <NavBar>
      <Link href="/cursos/">
        <NavLinks>Estude com a gente</NavLinks>
        </Link>
      <Link href="/seminarios/">
        <NavLinks>Leve o Eirene até sua igreja</NavLinks>
        </Link>
      <Link href="/quem-somos/">
        <NavLinks>Quem somos</NavLinks>
        </Link>
      <Link href="/professores/">
        <NavLinks>Professores</NavLinks>
        </Link>
      <Link href="/artigos/">
        <NavLinks>Artigos</NavLinks>
        </Link>
      <Link href="/monografias/">
        <NavLinks>Monografias</NavLinks>
      </Link>
    </NavBar>
  </div>
  )
}