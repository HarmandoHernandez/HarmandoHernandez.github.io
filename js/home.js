import { Image } from './models/image.js'

const $ = id => document.getElementById(id)

const insignia = []

insignia.push(new Image('html.png', 'HTML'))
insignia.push(new Image('css.png', 'CSS'))
insignia.push(new Image('js.png', 'Js'))
insignia.push(new Image('nodejs.png', 'NodeJS'))
insignia.push(new Image('npm.png', 'NPM'))
insignia.push(new Image('express.png', 'Express'))
insignia.push(new Image('angular.png', 'Angular'))
insignia.push(new Image('github.png', 'Github'))
insignia.push(new Image('bootstrap.png', 'Bootstrap'))
insignia.push(new Image('mysql.png', 'MySQL'))

const insigniaList = $('insignia-list')
const navOption = $('bange-template')

const buildData = (node, data) => {
  const badgeNode = navOption.content.cloneNode(true)
  const badgeImg = badgeNode.querySelector('img')
  badgeImg.src = `./assets/img/tec/${data.src}`
  badgeImg.alt = `${data.alt} badge`
  node.appendChild(badgeNode)
}

const loadData = () => {
  insignia.forEach(badge => buildData(insigniaList, badge))
}

loadData()
