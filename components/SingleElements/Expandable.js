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
    <Wrapper>
      <h2>Lista de matérias do curso</h2>
      <ul>
        { subjects.map((subject, id) => {
            if (id < min) {
              return  <li key={id}>{subject}</li>
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
        <Image 
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
  
  ul {
    margin-bottom: 2rem;
  }
`