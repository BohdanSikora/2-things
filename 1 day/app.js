    const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeAсtiveClasses()
        panel.classList.add('active')
    })
})

function removeAсtiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}