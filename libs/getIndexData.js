import { getCursosData } from './getCursosData'
import { getSeminariosData } from './getSeminariosData'

const getIndexData = () => {
  const cursosData = getCursosData()
  const seminariosData = getSeminariosData()
  const fullData = [...cursosData, ...seminariosData]
  const indexData = fullData.map(item => item.meta)

  return indexData

} 

export default getIndexData;