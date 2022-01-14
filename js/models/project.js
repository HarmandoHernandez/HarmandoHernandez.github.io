import { Image } from './image.js'

export class Project extends Image {
  constructor (title, description, url, src, alt) {
    super(src, `${alt} project`)
    this.title = title
    this.description = description
    this.url = url
  }
}
