import { Project } from './models/project.js'

const $ = id => document.getElementById(id)

const projects = []

projects.push(new Project('OtO', 'Disfruta de una buena lectura sin malestares visuales. 🤓', 'https://harmandohernandez.github.io/OtO/', 'oto.png', 'OTO'))
projects.push(new Project('Minimal Clock', 'El hoy es un obsequio, por eso se llama presente.', 'https://harmandohernandez.github.io/minimal-clock/', 'clock.png', 'Minimal Clack'))

const projectsList = $('projects')
const projectTemp = $('project-template')

const buildData = (node, data) => {
  const projectNode = projectTemp.content.cloneNode(true)
  const projectImg = projectNode.querySelector('img')
  projectImg.src = `./assets/img/project/${data.src}`
  projectImg.alt = data.tag
  projectNode.querySelector('h3').innerText = data.title
  projectNode.querySelector('div').innerText = data.description
  projectNode.querySelector('a').href = data.url
  node.appendChild(projectNode)
}

const loadData = () => {
  projects.forEach(project => buildData(projectsList, project))
}

loadData()
