import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import Button from "/components/SingleElements/Button";
import PlusIcon from "/public/assets/icons/plus.svg"

export default function Expandable({ subjects }) {
  const [min, setMin] = useState(5)

  function showSubjects() {
    min === 5 ? setMin(subjects.length) : setMin(5)
  }

  return (
    <Wrapper show={min !== 5} >
      <h2>Lista de matérias do curso</h2>
      <ul>
        { subjects.map((subject, index) => {
            if (index < min) {
              return  <li key={index}>{subject}</li>
            }
          })
        }
        {min === 5 && <li>...</li>}
      </ul>
      <Button
        type="icon"
        onClick={showSubjects}>
        { min === 5
          ? 'Ver todas as matérias'
          : 'Esconder matérias'
        }
        <img 
          src={PlusIcon.src}
          width={10}
          height={10}
          alt=""
        />
      </Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: var(--amareloLight);
  border-radius: 4px;
  border-left: 3px solid var(--azul);
  padding: 1rem 2rem;
  margin-bottom: 2rem;
  height: auto;
  
  ul {
    margin-bottom: 2rem;
    transition: all .5s ease-in-out;
    
    li {
      margin-bottom: 0.5rem;
    }
  }
`