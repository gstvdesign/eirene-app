import styled from "styled-components"

const ContentWrapper = styled.div`
  padding: 2rem;
  
  h1, h2, h3, h4, ul {
    margin-bottom: 1rem;
  }

  hr {
    margin-bottom: 3rem;
  }

  a {
    color: var(--laranja);
    display: inline-block;
    position: relative;
    text-decoration: none;
  }

  a::after{
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--laranja);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  a:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  *:hover{ 
    text-decoration: none;
    transition: all 0.5s;
  }

`

export default ContentWrapper