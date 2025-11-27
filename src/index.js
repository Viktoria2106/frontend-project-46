import { readFileSync } from 'node:fs'
import path from 'node:path'
import _ from 'lodash'

const gendiff = (filepath1, filepath2) => {
  const  getData = (filepath) => {
    const absoluPath = path.resolve(process.cwd(), filepath)
    const file = readFileSync(absoluPath, 'utf-8')
    const finalPath = path.extname(filepath).toLocaleLowerCase()

    switch(finalPath) {
      case '.json':
        return JSON.parse(file)
      default:
        throw new Error(finalPath)
    }
  }
  const data1 = getData(filepath1)
  const data2 = getData(filepath2)

  const allKeys = _.union(_.keys(data1), _.keys(data2))
  const sortedKeys = _.sortBy(allKeys)
  const diffLines = sortedKeys.map(key => {
    const value1 = data1[key]
    const value2 = data2[key]
  
    if (!_.has(data1, key)) {
      return `  + ${key}: ${value2}`
    } 
    else if (!_.has(data2, key)) {
      return `  - ${key}: ${value1}`
    } 
    else if (!_.isEqual(value1, value2)) {
      return `  - ${key}: ${value1}\n  + ${key}: ${value2}`
    } 
    else {
      return `    ${key}: ${value1}`
    }
  })
  return `{\n${diffLines.join('\n')}\n}`

}
export default gendiff