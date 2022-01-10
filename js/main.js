import { Insignia } from './insignia.js'

const $ = id => document.getElementById(id)

const insignias = []

insignias.push(new Insignia('html.png', 'HTML'))
insignias.push(new Insignia('css.png', 'CSS'))
insignias.push(new Insignia('js.png', 'Js'))
insignias.push(new Insignia('nodejs.png', 'NodeJS'))
insignias.push(new Insignia('npm.png', 'NPM'))
insignias.push(new Insignia('express.png', 'Express'))
insignias.push(new Insignia('angular.png', 'Angular'))
insignias.push(new Insignia('github.png', 'Github'))
insignias.push(new Insignia('bootstrap.png', 'Bootstrap'))
insignias.push(new Insignia('mysql.png', 'MySQL'))

const insigniaList = $('insignia-list')
const navOption = $('bange-template')

const buildData = (node, data) => {
  const badgeNode = navOption.content.cloneNode(true)
  const badgeImg = badgeNode.querySelector('img')
  badgeImg.src = `./assets/img/${data.src}`
  badgeImg.alt = data.tag
  node.appendChild(badgeNode)
}

const loadData = () => {
  insignias.forEach(badge => buildData(insigniaList, badge))
}

loadData()
