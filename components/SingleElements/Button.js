import styled, { css } from "styled-components";

export default function Button({type, children, onClick}) {
  return (
    <StyledButton onClick={onClick} type={type}>
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  text-align: left;
  ${(props) => {
    switch (props.type) {
      case "outline":
        return css`
          background-color: transparent;
          padding: 1rem 0.75rem;
          color: var(--laranjaClaro);
          font-weight: 700;
          border: 1px solid var(--laranjaClaro);
          border-radius: 30px;
          cursor: pointer;
          :hover {
            background: var(--laranjaLight);
          }
        `
      case "text":
        return css`
          background-color: transparent;
          color: var(--azul);
          font-weight: 700;
          border: 0;
          text-decoration: underline;
          cursor: pointer;
          :hover {
            text-decoration: none;
          }
        `
      case "icon":
        return css`
          background-color: transparent;
          color: var(--azul);
          font-weight: 700;
          display: flex;
          gap: 1rem;
          border: 0;
          cursor: pointer;
        `
      default:
        return css`
          background: var(--laranja);
          padding: 1rem;
          margin-bottom: 1rem;
          color: var(--white);
          text-align: left;
          border-radius: 1rem;
          border: 0;
          box-shadow: 4px 4px 2px rgba(0,0,0,.3);
          cursor: pointer;
          :hover {
            background: var(--text);
            box-shadow: 0;
          }
        `
    }
  }}
`