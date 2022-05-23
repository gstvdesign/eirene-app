import { getFolderData, getMdIds, getMdData } from '../helper/helpers'

const artigosDir = './_artigos'

export function getArtigosData() {
  return getFolderData(artigosDir)
} 

export function getArtigosId() {
  return getMdIds(artigosDir)
}

export async function getArtigoData(id) {
  return getMdData(artigosDir, id)
} 
