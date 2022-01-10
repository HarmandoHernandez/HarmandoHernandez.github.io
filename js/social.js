
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

// loadSocial()

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

const back = document.getElementById('back')
const header = document.getElementById('nav')

back.addEventListener('click', () => {
  window.scrollTo(0, 0)
  header.focus()
})
/* document.addEventListener('keypress', getEventType, false);
  function getEventType(event) {
      console.log(event);
  } */

const abbrMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const abbrMeses = ['En', 'Febr', 'Mzo', 'Abr', 'May', 'Jun', 'Jul', 'Agt', 'Sept', 'Oct', 'Nov', 'Dic']
