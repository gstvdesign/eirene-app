import { getFolderData, getMdIds, getMdData } from '../helper/helpers'

const seminariosDir = './_seminarios'

export function getSeminariosData() {
  return getFolderData(seminariosDir)
} 

export function getSeminariosId() {
  return getMdIds(seminariosDir)
}

export async function getSeminarioData(id) {
  return getMdData(seminariosDir, id)
} 
