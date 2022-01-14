
const HASH = {
  home: '#home',
  projects: '#projects',
  about: '#about'
}
const URLhash = window.location.hash.slice(1)

if (!HASH[URLhash]) {
  window.location.hash = HASH.home
}
