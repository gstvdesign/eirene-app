import { getFolderData, getMdData } from '../helper/helpers'

const professoresDir = './_outros'
const profFile = 'professores'

export function getProfessoresData() {
  return getMdData(professoresDir, profFile)
} 

const aboutDir = './_outros'
const aboutFile = 'quemsomos'

export function getAboutData() {
  return getMdData(aboutDir, aboutFile)
} 

const monoDir = './_monografias'

export function getMonoData() {
  const files = getFolderData(monoDir)
  return files
}