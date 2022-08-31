import { getFolderData, getMdIds, getMdData } from '../helper/helpers'

const notasDir = './_notas'

export function getNotasData() {
  return getFolderData(notasDir)
} 

export function getNotasId() {
  return getMdIds(notasDir)
}

export async function getNotaData(id) {
  return getMdData(notasDir, id)
} 
