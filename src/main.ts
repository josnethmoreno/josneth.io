import './style.css'
import './reset.css'

const toggle = document.getElementById('toggle')
const theme = document.getElementById('theme')
const nav = document.getElementById('nav')

const toggleNav = () => {
  const show = (nav?.getAttribute('data-show') === 'true')
  if(!show) return nav?.setAttribute('data-show', 'true')
  if(show) return nav?.setAttribute('data-show', 'false')
}

toggle?.addEventListener('click', toggleNav)

