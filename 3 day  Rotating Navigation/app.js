/*const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')
 
open.addEventListener('click', show_nav)
 
close.addEventListener('click', hide_nav)
 
document.body.addEventListener('click', (e) => {
    if(e.target && e.target.nodeName == 'A') {
        hide_nav()
    }
})
 
function show_nav() {
    container.classList.add('show-nav')
    container.addEventListener('click', hide_nav, true)
}
 
function hide_nav() {
    container.classList.remove('show-nav')
}*/

const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListener('click', () => container.classList.add('show-nav'))

close.addEventListener('click', () => container.classList.remove('show-nav'))