import { getFolderData, getMdData } from '../helper/helpers'

const outrossDir = '_outros'
const profFile = 'professores'

export function getProfessoresData() {
  return getMdData(outrossDir, profFile)
} 

const aboutFile = 'quemsomos'

export function getAboutData() {
  return getMdData(outrossDir, aboutFile)
} 

const monoDir = '_monografias'

export function getMonoData() {
  const files = getFolderData(monoDir)
  return files
}