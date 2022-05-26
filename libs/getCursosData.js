import { getFolderData, getMdIds, getMdData } from '../helper/helpers'

const cursosDir = '_cursos'

export function getCursosData() {
  return getFolderData(cursosDir)
} 

export function getCursosId() {
  return getMdIds(cursosDir)
}

export async function getCursoData(id) {
  return getMdData(cursosDir, id)
} 
