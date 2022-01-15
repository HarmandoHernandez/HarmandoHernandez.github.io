const $ = id => document.getElementById(id)

class SocialMedia {
  constructor (socialMedia, username, link, src) {
    this.socialMedia = socialMedia
    this.username = username
    this.link = link
    this.src = src
  }
}

const socials = []

socials.push(new SocialMedia(
  'Instagram',
  'harmandohdez',
  'https://www.instagram.com/harmandohdez/',
  'https://img.shields.io/badge/Instagram-@harmandohdez-E4405F?style=for-the-badge&logo=instagram&logoColor=white&labelColor=101010'
))
socials.push(new SocialMedia(
  'GitHub',
  'HarmandoHernandez',
  'https://github.com/HarmandoHernandez/HarmandoHernandez',
  'https://img.shields.io/badge/GitHub-@HarmandoHernandez-333333?style=for-the-badge&logo=github&logoColor=white&labelColor=101010'
))

const footerSocial = $('about__social-media')
const socialOption = $('social-media__option')

const loadSocial = () => {
  socials.forEach((social) => buildSocial(social))
}

const buildSocial = social => {
  const newSocial = socialOption.content.cloneNode(true)
  newSocial.querySelector('a').href = social.link
  const img = newSocial.querySelector('img')
  img.src = social.src
  img.alt = `${social.socialMedia} Tag of ${social.username}`
  footerSocial.appendChild(newSocial)
}

loadSocial()
