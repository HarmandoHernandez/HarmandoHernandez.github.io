
/**
 * Social Media
 */
class SocialMedia {
  constructor (socialMedia, username, link, srcTag) {
    this.socialMedia = socialMedia
    this.username = username
    this.link = link
    this.srcTag = srcTag
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

const footerSocial = document.getElementById('footer__social-media')
const socialOption = document.getElementById('social-media__option')

loadSocial()

function loadSocial () {
  socials.forEach((social) => buildSocial(social))
}

function buildSocial (social) {
  const newSocial = socialOption.content.cloneNode(true)
  newSocial.querySelector('a').href = social.link
  const img = newSocial.querySelector('img')
  img.src = social.srcTag
  img.alt = `${social.socialMedia} Tag of ${social.username}`
  footerSocial.appendChild(newSocial)
}
