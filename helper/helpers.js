import fs from 'fs'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'

const files = (directory) => fs.readdirSync(`./_data/${directory}`)

export function getFolderData(directory) {
  const array = files(directory)
  
  return array.map(file => {
    const cursosStr = fs.readFileSync(`./_data/${directory}/${file}`, 'utf8')
    const parsedStr = matter(cursosStr)
    const { layout, title, type, meta: excerpt, img } = parsedStr.data
    const rawContent = remark()
      .use(remarkHtml)
      .processSync(parsedStr.content)
    const content = rawContent.toString()
    return {
      meta: {
        title,
        layout: layout ? layout : '',
        type: type ? type : '',
        excerpt: excerpt ? excerpt : '',
        img: img ? img : '',
        slug: file.replace('.md', ''),
      },
      content
    }
  })
}

export function getMdIds(directory) {
  const array = files(directory)
  return array.map(file => {
    return {
      params: {
        id: file.replace('.md', '')
      }
    }
  })
}

export async function getMdData(directory, id) {
  const folderStr = fs.readFileSync(`./_data/${directory}/${id}.md`, 'utf8')
  const parsedStr = matter(folderStr)
  const processedContent = await remark()
  .use(remarkHtml)
  .process(parsedStr.content)
  const content = processedContent.toString()
  return {
    content,
    ...parsedStr.data
  }
}